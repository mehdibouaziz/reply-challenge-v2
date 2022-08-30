import React from 'react'
import DeviceListItem from './DeviceListItem';

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import Divider from '@mui/material/Divider';

import { useSelector, useDispatch } from 'react-redux'
import { expandRoom } from '../slices/lightsSlice'

const RoomListItem = ({roomId}) => {
  const content = useSelector(state => state.lights.data[roomId])
  const dispatch = useDispatch()


  return (
    <>
        <ListItemButton onClick={() => dispatch(expandRoom({id: roomId}))}>
          <ListItemIcon>
            <MeetingRoomIcon />
          </ListItemIcon>
          <ListItemText primary={content.name} />
          {content.open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={content.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding dense={true}>
                {Object.keys(content.devices).map((key) => {
                    return <DeviceListItem roomId={roomId} deviceId={key} key={roomId + '-' + key}/>
                })}
            </List>
        </Collapse>

        <Divider />
    </>
  )
}

export default RoomListItem