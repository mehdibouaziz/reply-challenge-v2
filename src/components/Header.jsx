import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const Header = ({menuToggle}) => {
  const location = useLocation();
  const [pageName, setPageName] = useState('')

  useEffect(() => {
    if(location.pathname === '/'){setPageName('> Lights settings')}
    else if(location.pathname === '/manage'){setPageName('> Manage devices')}
    else {setPageName('')}
  },[location]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={4}>
        <Toolbar>

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => menuToggle(true)}
            >
              <MenuIcon />
            </IconButton>


          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Home {pageName}
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header