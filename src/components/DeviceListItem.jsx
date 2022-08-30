import React from 'react'

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Switch from '@mui/material/Switch';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';

import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import LightIcon from '@mui/icons-material/Light';
import PaletteIcon from '@mui/icons-material/Palette';
import Divider from '@mui/material/Divider';

import { useSelector, useDispatch } from 'react-redux'
import { switchDevice, dimDevice, displayColorPicker } from '../slices/lightsSlice'

const DeviceListItem = ({roomId, deviceId}) => {
    const content = useSelector(state => state.lights.data[roomId].devices[deviceId])
    const dispatch = useDispatch()

  return (
    <>
        <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
                <LightIcon />
            </ListItemIcon>
            <ListItemText primary={content.name} />
            <Switch
                edge="end"
                onChange={() => dispatch(switchDevice({roomId: roomId, deviceId: deviceId}))}
                checked={content.on}
            />  
        </ListItemButton>
        
        {!content.on ? <></> : 
        <ListItem sx={{ pl: 4 }}>
        <Box sx={{ width: '80%', marginLeft: '50px' }}>
            <Stack spacing={3} direction="row" sx={{ mb: 1 }} alignItems="center">
                <SettingsBrightnessIcon sx={{margin: 0, color: 'rgba(0,0,0,0.54)'}} />
                <Slider
                    size="small"
                    aria-label="Dimness"
                    value={content.dim}
                    min={0}
                    max={100}
                    onChange={(e) => dispatch(dimDevice({roomId: roomId, deviceId: deviceId, value: e.target.value}))}
                />
                <Stack spacing={0} direction="row" sx={{ mb: 1 }} alignItems="center">
                    <PaletteIcon sx={{margin: 0, color: 'rgba(0,0,0,0.54)'}} />
                    <IconButton aria-label="choose light color" onClick={() => dispatch(displayColorPicker({roomId: roomId, deviceId: deviceId}))} >
                        <Brightness1Icon sx={{
                            margin: 0,
                            color: content.color,
                            border: 'solid 1px #ccc',
                            borderRadius: '50%'
                            }}/>
                    </IconButton>
                </Stack>
            </Stack>
        </Box>
    </ListItem>
        }
        <Divider variant="inset" />
    </>
  )
}

export default DeviceListItem