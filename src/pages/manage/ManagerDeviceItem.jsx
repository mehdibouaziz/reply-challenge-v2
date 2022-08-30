import React from 'react'
import { useState } from 'react';

import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import { Button } from "@mui/material";


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import LightIcon from '@mui/icons-material/Light';
// import DeleteIcon from '@mui/icons-material/Delete';
import ClearIcon from '@mui/icons-material/Clear';


import { useSelector, useDispatch } from 'react-redux'
import { deleteDevice } from '../../slices/lightsSlice'

const ManagerDeviceItem = ({roomId, deviceId}) => {
    const [displayDialogue, setDisplayDialogue] = useState(false);
    const content = useSelector(state => state.lights.data[roomId].devices[deviceId])
    const dispatch = useDispatch()

    const showDialogue = () => {
        setDisplayDialogue(true);
      };
    
      const handleClose = () => {
        setDisplayDialogue(false);
      };
    
      const handleAgree = () => {
        setDisplayDialogue(false);
        dispatch(deleteDevice({roomId: roomId, deviceId: deviceId}))
      }

  return (
    <>
        <ListItem sx={{ pl: 4 }} secondaryAction={
            <Tooltip title={`Delete ${content.name}`}>
                <IconButton aria-label="delete device" onClick={() => showDialogue()}>
                    <ClearIcon color='secondary' fontSize='small' />
                </IconButton>
            </Tooltip>
        }>
            <ListItemIcon>
                <LightIcon />
            </ListItemIcon>
            <ListItemText primary={content.name} />

        </ListItem>
        
        <Divider variant="inset" />

        <Dialog
          open={displayDialogue}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Delete Device?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              This action can't be reversed, are you sure you want to delete {content.name}?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleAgree} autoFocus>
              Delete Device
            </Button>
          </DialogActions>
        </Dialog>
    </>
  )
}

export default ManagerDeviceItem