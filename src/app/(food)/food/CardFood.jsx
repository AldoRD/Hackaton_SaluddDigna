import React from 'react'
import { Box, Card, CardContent, Grid, Stack, Typography } from '@mui/material'

export const CardFood = ({ label, image, nutrients }) => {
  return (
    <Grid item xs={4}>
      <Card
        sx={{
          background: 'transparent'
        }}
        className='glass-1'
      >
        <CardContent>
          <Typography gutterBottom variant='h5' component='div' noWrap color='#121212' fontWeight={300} align='center'>
            {label}
          </Typography>
          <Box>
            <Typography variant='h3' component='div' noWrap color='#121212' fontWeight={600} align='center'>
              {Math.trunc(nutrients.ENERC_KCAL)}{' '}
              <Typography variant='subtitle1' component={'span'} fontWeight={500}>
                Kcal
              </Typography>
            </Typography>
          </Box>
          <Stack padding={2}>
            <Box display={'flex'} justifyContent={'space-between'}>
              <Typography variant='h6' sx={{ color: '#121212' }}>
                PROTEIN{' '}
              </Typography>
              <Typography component={'span'} fontWeight={500} sx={{ color: '#121212' }}>
                {Math.trunc(nutrients.PROCNT)} g
              </Typography>
            </Box>
            <Box display={'flex'} justifyContent={'space-between'}>
              <Typography variant='h6' sx={{ color: '#121212' }}>
                FAT{' '}
              </Typography>
              <Typography component={'span'} fontWeight={500} sx={{ color: '#121212' }}>
                {Math.trunc(nutrients.FAT)} g
              </Typography>
            </Box>
            <Box display={'flex'} justifyContent={'space-between'}>
              <Typography variant='h6' sx={{ color: '#121212' }}>
                CARB{' '}
              </Typography>
              <Typography component={'span'} fontWeight={500} sx={{ color: '#121212' }}>
                {Math.trunc(nutrients.CHOCDF)} g
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  )
}
