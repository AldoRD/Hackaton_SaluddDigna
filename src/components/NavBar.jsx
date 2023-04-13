import React from 'react'
import { AppBar, Box, Grid, Link as MuiLink, Toolbar, Typography, useScrollTrigger } from '@mui/material'
import { LinkCustom } from './LinkCustom'

const scrollTopStyles = {
  background: 'rgba(255,255,255,0)',
  backdropFilter: 'blur(5px)',
  color: '#121212'
}

const scrollDownStyles = {
  background: 'rgba(255,255,255,0)',
  boxShadow: ' 0 4px 30px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(5px)',
  border: '1px solid rgba(255,255,255,0.1)',
  color: '#121212'
}

function ElevationScroll({ children }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    sx: trigger ? scrollDownStyles : scrollTopStyles
  })
}

export const NavBar = props => {
  return (
    <ElevationScroll {...props}>
      <AppBar>
        <Toolbar>
          <Box display={'flex'} justifyContent={'space-between'} flexGrow={1} sx={{ px: 2 }}>
            <Box display={'flex'}>
              <Typography variant='h5' fontWeight={700} className='gradiente-text-green'>
                Salud
              </Typography>
              <Typography variant='h5' fontStyle={'italic'}>
                Digna
              </Typography>
            </Box>
            <Box display={'flex'} gap={4} alignItems={'center'}>
              <LinkCustom path='/'>Home</LinkCustom>
              <LinkCustom path='/chat'>Chat</LinkCustom>
              <LinkCustom path='/food'>Comida</LinkCustom>
              <LinkCustom path='/recipes'>Recetas</LinkCustom>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  )
}
