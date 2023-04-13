import React from 'react'
import { Box, Card, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material'

export const CardRecipe = ({ label, images, totalNutrients, calories }) => {
  return (
    <Grid item xs={8} md={4}>
      <Card
        sx={{
          background: 'transparent'
        }}
        className='glass-1'
      >
        <CardMedia image={images.LARGE.url} sx={{ height: 200 }} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div' noWrap color='#121212' fontWeight={300} align='center'>
            {label}
          </Typography>
          <Box>
            <Typography variant='h3' component='div' noWrap color='#121212' fontWeight={600} align='center'>
              {Math.trunc(calories)}{' '}
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
                {Math.trunc(totalNutrients.PROCNT.quantity)} g
              </Typography>
            </Box>
            <Box display={'flex'} justifyContent={'space-between'}>
              <Typography variant='h6' sx={{ color: '#121212' }}>
                FAT{' '}
              </Typography>
              <Typography component={'span'} fontWeight={500} sx={{ color: '#121212' }}>
                {Math.trunc(totalNutrients.FAT.quantity)} g
              </Typography>
            </Box>
            <Box display={'flex'} justifyContent={'space-between'}>
              <Typography variant='h6' sx={{ color: '#121212' }}>
                CARB{' '}
              </Typography>
              <Typography component={'span'} fontWeight={500} sx={{ color: '#121212' }}>
                {Math.trunc(totalNutrients.CHOCDF.quantity)} g
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  )
}
