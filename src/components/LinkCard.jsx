import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

export const LinkCard = () => {
  return (
    <Grid item xs={4}>
      <Card sx={{ maxWidth: 345, background: 'transparent' }} className='glass-1'>
        <CardActionArea>
          <CardMedia component='img' height='140' image='/Manzana.png' alt='green iguana' />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div' color='#fff'>
              Lizard
            </Typography>
            <Typography variant='body2' color='rgba(255,255,255,0.6)'>
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
              continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}
