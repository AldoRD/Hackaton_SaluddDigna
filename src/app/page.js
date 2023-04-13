'use client'
import { LinkCard } from '@/components/LinkCard'
import { Box, Typography, Grid, Container, Paper, Divider, Tabs, Tab } from '@mui/material'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* Landing Page Title */}
      <Box sx={{ px: 10 }}>
        <Grid container alignItems={'center'} justifyContent={'center'} sx={{ p: 5 }}>
          <Grid item xs={12} md={6}>
            <Box display={'flex'} gap={4} flexDirection={'column'}>
              <Typography className='gradient-text' variant='h1' color={'#fff'} fontWeight={700} fontSize={'82px'}>
                <Typography component={'span'} fontSize={'82px'} fontWeight={700} className='gradient-text-green'>
                  Salud
                </Typography>
                Digna
              </Typography>
              <Typography variant='subtitle1' color={'#121212'}>
                {`"Mantén tu cuerpo feliz y saludable. Descubre cómo comer bien puede mejorar tu bienestar".`}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Image src={'/Manzana.png'} alt='Manzana' width={500} height={500} />
          </Grid>
        </Grid>
      </Box>

      {/* Chat assistant preview   */}
      <Box sx={{ p: 8, mt: 5 }}>
        <Typography variant='h3' className='gradient-text-green' align='center' sx={{ mb: 6 }} fontWeight={700}>
          Chatea con el asistente para obtener consejos sobre nutrición
        </Typography>
        <Grid container display={'flex'} justifyContent={'center'}>
          <Grid item xs={10} md={6}>
            <Paper
              className='glass'
              variant='outlined'
              sx={{ height: 450, background: '#141414', p: 4, borderColor: '#6f6d6c', overflowY: 'auto' }}
            >
              <Grid container display={'flex'} direction={'column'} gap={1}>
                <Typography variant='h5' color={'#121212'}>
                  ¿Comó puedes ayudarme?
                </Typography>
                <Divider variant='fullWidth' color='#222' />
                <Typography color={'#121212'}>
                  Como asistente de nutrición y salud, puedo proporcionarte información sobre dietas saludables, recetas
                  nutritivas y equilibradas, cantidad calórica de los alimentos, recomendaciones de ejercicio físico y
                  referencias sobre información nutricional y de salud. Si tienes alguna pregunta específica sobre cómo
                  mejorar tu dieta o estilo de vida para lograr tus objetivos de salud, estaré encantado de ayudarte en
                  lo que pueda. Recuerda que mi enfoque es exclusivamente en temas de nutrición y salud, por lo que no
                  puedo brindar información sobre otros temas que no sean relacionados a estos.
                </Typography>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
