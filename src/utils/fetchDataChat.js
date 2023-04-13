import { APIS } from '@/config/consts'

export const fetchData = async (prompt, setter) => {
  setter('')
  const url = `${APIS.GENERATE}?prompt=${prompt}`
  const res = await fetch(url)
  const reader = res.body.getReader()
  const decoder = new TextDecoder()

  let result
  let text = ''

  while (!(result = await reader.read()).done) {
    const string = decoder.decode(result.value)
    text += string
    setter(prev => prev + string)
  }

  return text
}
