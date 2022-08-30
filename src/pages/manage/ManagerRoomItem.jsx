import React from 'react'
import { useState } from 'react';

import ManagerDeviceItem from './ManagerDeviceItem';

import { ListItem } from '@mui/material';
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { Button } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';
import { Stack } from '@mui/system';
import TextField from '@mui/material/TextField';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import ClearIcon from '@mui/icons-material/Clear';


import { useSelector, useDispatch } from 'react-redux'
import { deleteRoom, addDevice } from '../../slices/lightsSlice'

const ManagerRoomItem = ({roomId}) => {
  const [displayDeleteRoom, setDisplayDeleteRoom] = useState(false);
  const [displayAddDevice, setDisplayAddDevice] = useState(false);
  const [newId, setNewId] = useState('')
  const [newName, setNewName] = useState('')
  const content = useSelector(state => state.lights.data[roomId])
  const dispatch = useDispatch()

  const showDeleteRoom = () => {
    setDisplayDeleteRoom(true);
  };
  const handleCloseDeleteRoom = () => {
    setDisplayDeleteRoom(false);
  };
  const handleAgreeDeleteRoom = () => {
    setDisplayDeleteRoom(false);
    dispatch(deleteRoom({roomId: roomId}))
  }

  const showAddDevice = () => {
    setDisplayAddDevice(true);
  };
  const handleCloseAddDevice = () => {
    setDisplayAddDevice(false);
    setNewId('')
    setNewName('')
  };
  const handleAgreeAddDevice = () => {
    setDisplayAddDevice(false);
    dispatch(addDevice({roomId: roomId, deviceId: newId, deviceName: newName}))
    setNewId('')
    setNewName('')
  }



  return (
    <>
        <ListItem secondaryAction={
          <>
            <Tooltip title={`Add new device to ${content.name}`}>
              <Button onClick={() => showAddDevice()}>Add Device</Button>
            </Tooltip>
            <Tooltip title={`Delete ${content.name}`}>
              <IconButton aria-label="delete room"  onClick={() => showDeleteRoom()}>
                <ClearIcon color='primary' />
              </IconButton>
            </Tooltip>

          </>
        }>
          <ListItemIcon>
            <MeetingRoomIcon />
          </ListItemIcon>
          <ListItemText primary={content.name} />
          
        </ListItem>

        <Divider variant="inset"/>

        <Collapse in={true}>
            <List component="div" disablePadding dense={true}>
                {Object.keys(content.devices).map((key) => {
                    return <ManagerDeviceItem roomId={roomId} deviceId={key} key={roomId + '-' + key}/>
                })}
            </List>
        </Collapse>
        

        <Dialog
          open={displayDeleteRoom}
          onClose={handleCloseDeleteRoom}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Delete Room?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              This action can't be reversed, are you sure you want to delete {content.name} and all associated devices?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDeleteRoom}>Cancel</Button>
            <Button onClick={handleAgreeDeleteRoom} autoFocus>
              Delete Room
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={displayAddDevice}
          onClose={handleCloseAddDevice}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Add New Device"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Please provide a unique device name and id:
            </DialogContentText>
          </DialogContent>
          <Stack direction="column" justifyContent="center" alignItems="center">
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="email"
            fullWidth
            variant="standard"
            sx={{width: '80%'}}
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="ID (no space)"
            type="email"
            fullWidth
            variant="standard"
            sx={{width: '80%'}}
            value={newId}
            onChange={(e) => setNewId(e.target.value)}
          />
          </Stack>
          <DialogActions>
            <Button onClick={handleCloseAddDevice}>Cancel</Button>
            <Button onClick={handleAgreeAddDevice} autoFocus>
              Add Device
            </Button>
          </DialogActions>
        </Dialog>
    </>
  )
}

export default ManagerRoomItem