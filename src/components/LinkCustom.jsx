import { Link as MuiLink } from '@mui/material'
import Link from 'next/link'
import React from 'react'

export const LinkCustom = ({ children, path = '/' }) => {
  return (
    <MuiLink
      underline='none'
      sx={{
        color: 'rgba(0,0,0,0.7)',
        ':hover': {
          color: '#121212'
        }
      }}
      component={Link}
      prefetch={false}
      href={{ pathname: path }}
    >
      {children}
    </MuiLink>
  )
}
