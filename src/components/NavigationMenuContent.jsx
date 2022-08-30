import React from 'react'
import { Link } from 'react-router-dom'

import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';

import LightIcon from '@mui/icons-material/Light';
import SettingsIcon from '@mui/icons-material/Settings';

const NavigationMenuContent = () => {
  return (
    <MenuList>
      <MenuItem component={Link} to='/'>
            <ListItemIcon>
                <LightIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Lights</ListItemText>
            <Typography variant="body2" color="text.secondary">
                2.1
            </Typography>
      </MenuItem>
      <MenuItem component={Link} to='/manage'>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Manage devices</ListItemText>
          <Typography variant="body2" color="text.secondary">
                2.2
          </Typography>
      </MenuItem>
    </MenuList>
  )
}

export default NavigationMenuContent