import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const SizeSelector = () => {
  return (
    <Box>
        {
            sizes.map(size =>(
                <Button key={size}
                size='small'
                color={selectedSize === size ? 'primary' : 'info'}
                >
                    {size}
                </Button>
            ))
        }
    </Box>
  )
}

export default SizeSelector