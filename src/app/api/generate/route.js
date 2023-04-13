import { APIS, INIT_MESSAGES } from '@/config/consts'

const decoder = new TextDecoder('utf-8')
const encoder = new TextEncoder()

function iteratorToStream(iterator) {
  return new ReadableStream({
    async pull(controller) {
      const { value, done } = await iterator.read()

      if (done) {
        controller.close()
      } else {
        const chunk = decoder.decode(value)
        const transformedChunk = chunk
          .split('\n')
          .filter(Boolean)
          .map(line => line.replace('data: ', '').trim())

        for (const data of transformedChunk) {
          if (data === '[DONE]') controller.close()
          const json = JSON.parse(data)
          const { content } = json.choices?.[0]?.delta
          content && controller.enqueue(encoder.encode(content))
        }
      }
    }
  })
}

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const prompt = searchParams.get('prompt')
  const response = await fetch(APIS.API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      temperature: 0.6,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      messages: [...INIT_MESSAGES, { content: prompt, role: 'user' }],
      stream: true
    })
  })

  if (!response.ok) {
    return new Response('Somenthing is wrong', { status: 500 })
  }

  const reader = response.body.getReader()
  const stream = iteratorToStream(reader)
  return new Response(stream, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      // Connection: 'keep-alive',
      // 'Cache-Control': 'no-cache, no-transform',
      // 'Content-Encoding': 'none',
      'Content-Type': 'text/event-stream; charset=utf-8'
    }
  })
}
