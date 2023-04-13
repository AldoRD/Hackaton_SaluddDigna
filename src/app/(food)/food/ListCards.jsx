'use client'
import React, { useState } from 'react'
import { Box, Button, Grid, InputBase } from '@mui/material'
import { APIS } from '@/config/consts'
import { CardFood } from './CardFood'

const getIngredientByName = async (name = 'apple') => {
  const response = await fetch(
    `${APIS.FOOD}?app_id=${process.env.NEXT_PUBLIC_EDAMAM_APP_ID}&app_key=${process.env.NEXT_PUBLIC_EDAMAM_APP_KEY}&ingr=${name}`,
    {
      method: 'GET'
    }
  )

  const { hints } = await response.json()
  console.log(hints)
  return hints
}

export const ListCards = () => {
  const [food, setFood] = useState([])
  const [input, setInput] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    const data = await getIngredientByName(input.toLowerCase())
    setInput('')
    setFood([...data])
  }

  return (
    <Grid container>
      <Grid item xs={12} display={'flex'} justifyContent={'center'}>
        <Box>
          <form onSubmit={handleSubmit}>
            <InputBase
              placeholder='Busca un ingrediente'
              sx={{ color: '#121212' }}
              value={input}
              onChange={e => {
                setInput(e.target.value)
              }}
            />
            <Button variant='outlined' type='submit'>
              Buscar
            </Button>
          </form>
        </Box>
      </Grid>
      <Grid xs={12} item padding={8}>
        <Grid container display={'flex'} justifyContent={'center'} spacing={2}>
          {food.map((foodItem, index) => (
            <CardFood key={foodItem.food.foodId + index} {...foodItem.food} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}
