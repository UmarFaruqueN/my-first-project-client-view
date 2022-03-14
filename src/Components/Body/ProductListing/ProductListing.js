import { Container } from '@mui/material'
import React from 'react'
import { Box } from '@mui/system'
import Banner from '../Home/Components/Banner/Banner'

const ProductListing=()=> {
  return (<>
      <Container>
          <Box width="100%"  height="100%" mb={10} pt={13}> <Banner/></Box>   
          
      </Container>
      </>   
  )
}

export default ProductListing