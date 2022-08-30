import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';



import { HexColorPicker } from "react-colorful";

import { useSelector, useDispatch } from 'react-redux'
import { changePickerColor, validatePickerColor, cancelPickerColor } from '../slices/lightsSlice'


const ColorMenu = ({setColor, changeColor}) => {
  const color = useSelector(state => state.lights.colorEditor.color)
  const dispatch = useDispatch()

  return (
    <Box sx={{
      backgroundColor: 'rgba(0, 0, 0, 0.25)',
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
    }}>

      <Paper sx={{
        padding: '30px',
        backgroundColor: 'white',
        marginTop: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position:' relative'
      }}>
        <HighlightOffIcon onClick={() => dispatch(cancelPickerColor())} sx={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          cursor: 'pointer',
          color: 'rgba(0,0,0,0.54)'
        }} />
        <Stack spacing={2} direction="row" sx={{ mb: 1, marginBottom: '20px' }} alignItems="center">
          <Box sx={{
            width: '25px',
            height: '25px',
            backgroundColor: color,
            borderRadius: '5px',
            border: '1px solid #d7d7d7'
          }} />
          <TextField id="color-hex" variant="standard" value={color} InputProps={{
            readOnly: true,
          }} />
        </Stack>

        <HexColorPicker color={color} onChange={(color) => dispatch(changePickerColor(color))} />

        <Button variant="contained" onClick={() => dispatch(validatePickerColor())} sx={{
          marginTop: '15px',
        }}>Pick color</Button>

      </Paper>
    </Box>
  )
}

export default ColorMenu