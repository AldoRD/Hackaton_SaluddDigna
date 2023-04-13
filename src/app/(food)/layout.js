'use client'
import { Box, Container, Grid, Typography } from '@mui/material'

export default function RootLayout({ children }) {
  return (
    <Container display={'flex'}>
      <Grid container display={'flex'} direction={'column'} alignItems={'center'} spacing={2}>
        {children}
      </Grid>
    </Container>
  )
}
