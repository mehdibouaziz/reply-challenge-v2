import List from "@mui/material/List";
import Box from '@mui/material/Box';

import { useSelector } from 'react-redux'


import RoomListItem from "./RoomListItem";
import ColorMenu from "./ColorMenu";



const DeviceList = () => {
  const list = useSelector(state => Object.keys(state.lights.data))
  const showColorMenu = useSelector(state => state.lights.colorEditor.display)

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

        {list.map((key) => {
            return <RoomListItem roomId={key} key={key}/>
        })}
    
      </List>

      {!showColorMenu ? <></> : <ColorMenu />}
    </Box>
  );
};

export default DeviceList;
