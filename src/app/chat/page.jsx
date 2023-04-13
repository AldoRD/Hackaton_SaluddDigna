'use client'
import React from 'react'
import { Box, Divider, Grid, OutlinedInput, Paper, Stack, TextField, Typography } from '@mui/material'
import { Chat } from './Chat'

export default function page() {
  return (
    <Box padding={5}>
      <Grid container display={'flex'} justifyContent={'center'}>
        <Grid item xs={8} sx={{ mb: 2 }}>
          <Typography variant='h2' align='center' fontWeight={600} className='gradient-text-green'>
            Chat Asistente
          </Typography>
        </Grid>
        <Chat />
      </Grid>
    </Box>
  )
}
