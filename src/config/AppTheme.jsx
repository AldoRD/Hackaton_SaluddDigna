import React from 'react'
import createEmotionCache from '@/utils/createEmotionCache'
import { CacheProvider } from '@emotion/react'
import { createTheme } from '@mui/material'
import { ThemeProvider } from 'styled-components'
import { grey, indigo } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: indigo,
    secondary: {
      main: '#673ab7'
    }
  }
})

const cache = createEmotionCache()

export const AppTheme = ({ children }) => {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CacheProvider>
  )
}
