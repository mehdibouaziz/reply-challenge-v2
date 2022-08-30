import React from 'react'
import { useState } from 'react';

import List from "@mui/material/List";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from "@mui/material";
import { Stack } from '@mui/system';

import { useSelector, useDispatch } from 'react-redux'
import { addRoom } from '../../slices/lightsSlice'

import ManagerRoomItem from "./ManagerRoomItem";



const DeviceList = () => {
  const [displayDialogue, setDisplayDialogue] = useState(false);
  const list = useSelector(state => Object.keys(state.lights.data))
  const dispatch = useDispatch()
  const [newId, setNewId] = useState('')
  const [newName, setNewName] = useState('')

  const showDialogue = () => {
    setDisplayDialogue(true);
  };

  const handleClose = () => {
    setDisplayDialogue(false);
    setNewId('')
    setNewName('')
  };

  const handleAgree = () => {
    setDisplayDialogue(false);
    dispatch(addRoom({roomId: newId, roomName: newName}))
    setNewId('')
    setNewName('')
  }

  return (
    <Box sx={{
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '5px'
    }}>
      

      <List
        sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}
        dense={false}
        component="nav"
      >
      <Button onClick={() => showDialogue()}>Add Room</Button>

        {list.map((key) => {
            return <ManagerRoomItem roomId={key} key={key}/>
        })}
    
      </List>

      <Dialog
          open={displayDialogue}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"ADD NEW ROOM"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Please provide a unique room name and id:
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
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleAgree} autoFocus>
              Add Room
            </Button>
          </DialogActions>
        </Dialog>
    </Box>
  );
};

export default DeviceList;
