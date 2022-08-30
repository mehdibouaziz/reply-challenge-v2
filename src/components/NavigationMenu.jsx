import React from 'react'

import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';

import NavigationMenuContent from './NavigationMenuContent';


const NavigationMenu = ({display, menuToggle}) => {
  return (
    <Drawer open={display} onClose={() => menuToggle(false)}>
        <Box onClick={() => menuToggle(false)} sx={{
            width: '250px'
        }}>
            <NavigationMenuContent />
        </Box>
    </Drawer>
  )
}

export default NavigationMenu