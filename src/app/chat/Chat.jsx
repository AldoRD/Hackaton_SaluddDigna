'use client'
import React, { useState } from 'react'
import {
  Box,
  CircularProgress,
  Divider,
  Grid,
  IconButton,
  InputBase,
  LinearProgress,
  Paper,
  Stack,
  Typography
} from '@mui/material'
import ReactMarkdown from 'react-markdown'
import { Send } from '@mui/icons-material'
import { fetchData } from '@/utils/fetchDataChat'

export const Chat = () => {
  const [text, setText] = useState('')
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async event => {
    setIsLoading(true)
    event.preventDefault()
    await fetchData(input, setText)
    setIsLoading(false)
  }

  return (
    <Grid item xs={12} md={6}>
      <Paper
        className='glass'
        variant='outlined'
        sx={{ background: '#141414', p: 4, borderColor: '#6f6d6c', overflowY: 'auto' }}
      >
        <Grid container display={'flex'} direction={'column'} gap={1}>
          <Grid item xs={12}>
            <form onSubmit={handleSubmit}>
              <Grid container display={'flex'} alignItems={'center'}>
                <Grid item xs={11}>
                  <InputBase
                    placeholder='Typing something...'
                    sx={{ color: '#121212' }}
                    fullWidth
                    value={input}
                    onChange={e => {
                      setInput(e.target.value)
                    }}
                  />
                </Grid>
                <Grid item xs={1}>
                  <IconButton type='submit' sx={{ color: '#121212' }}>
                    {isLoading ? <CircularProgress size={20} /> : <Send />}
                  </IconButton>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Divider sx={{ borderColor: '#121212' }} />
          <Grid item>
            <Stack spacing={1}>
              {isLoading && (
                <Paper
                  variant='outlined'
                  sx={{
                    p: 2,
                    background: 'transparent',
                    color: '#121212'
                  }}
                >
                  <Typography variant='body1'>El asistente esta escibiendo... </Typography>
                  <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                  </Box>
                </Paper>
              )}
              <Paper
                variant='outlined'
                sx={{ p: 2, background: 'transparent', color: '#121212', borderColor: 'rgba(255,255,255,0.5)' }}
              >
                <ReactMarkdown>{text}</ReactMarkdown>
              </Paper>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}
