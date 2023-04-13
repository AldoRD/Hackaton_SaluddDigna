'use client'
import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { ListCards } from './ListCards'

export default function page() {
  return (
    <>
      <Grid item>
        <Typography className='gradient-text-green' variant='h1' fontWeight={700} fontSize={'82px'}>
          Busca Comida
        </Typography>
      </Grid>

      <Grid item>
        <ListCards />
      </Grid>
    </>
  )
}
