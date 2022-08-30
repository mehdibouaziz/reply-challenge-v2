import { createSlice } from '@reduxjs/toolkit'

export const lightsSlice = createSlice({
    name: 'lights',
    initialState: {
        colorEditor : {
            display: false,
            room: '',
            device: '',
            color: ''
        },
        data: {
            'livingRoom' : {
                open: true,
                name: 'Living Room',
                devices: {
                    'ceiling': {
                        name: 'Ceiling lights',
                        on : true,
                        dim: 50,
                        color: '#0082ff'
                    },
                }
            },
            'bedroom' : {
                open: true,
                name: 'Bedroom',
                devices: {
                    'ceiling': {
                        name: 'Ceiling lights',
                        on : true,
                        dim: 80,
                        color: '#ffffff'
                    },
                    'bedside': {
                        name: 'Bedside light',
                        on : true,
                        dim: 20,
                        color: '#c70000'
                    },
                }
            },
            'bathroom' : {
                open: true,
                name: 'Bathroom',
                devices: {
                    'ceiling': {
                        name: 'Ceiling lights',
                        on : true,
                        dim: 50,
                        color: '#ffe5a9'
                    },
                    'mirror': {
                        name: 'Mirror lights',
                        on : false,
                        dim: 50,
                        color: '#ffffff'
                    },
                }
            },
        }
      },
      reducers: {
        expandRoom: (state, action) => {
            // toggle expand or hide the devices for a room
            // payload contains the room id: 'id'
            state.data[action.payload.id].open = !state.data[action.payload.id].open
        },
        switchDevice: (state, action) => {
            // toggle on off a device
            // payload contains the room id and the device id
            state.data[action.payload.roomId].devices[action.payload.deviceId].on = !state.data[action.payload.roomId].devices[action.payload.deviceId].on
        },
        dimDevice: (state, action) => {
            // change dimness of a device
            // payload contains : roomId, deviceId, value
            state.data[action.payload.roomId].devices[action.payload.deviceId].dim = action.payload.value
        },
        displayColorPicker: (state, action) => {
            // display the color editor and save which device/room is being edited
            // payload contains : roomId, deviceId
            state.colorEditor = {
                display: true,
                room: action.payload.roomId,
                device: action.payload.deviceId,
                color: state.data[action.payload.roomId].devices[action.payload.deviceId].color
            }
        },
        changePickerColor: (state, action) => {
            // handle interaction with the color picker
            // payload IS the color
            state.colorEditor.color = action.payload
        },
        validatePickerColor: (state) => {
            state.data[state.colorEditor.room].devices[state.colorEditor.device].color = state.colorEditor.color
            state.colorEditor = {
                display: false,
                room: '',
                device: '',
                color: ''
            }
        },
        cancelPickerColor: (state) => {
            state.colorEditor = {
                display: false,
                room: '',
                device: '',
                color: ''
            }
        },
        addRoom: (state, action) => {
            //create a new room
            //payload contains: roomId, roomName
            state.data[action.payload.roomId] = {
                open: true,
                name: action.payload.roomName,
                devices: {}
            }
        },
        addDevice: (state, action) => {
            //create a new device
            //payload contains: roomId, deviceId, deviceName
            state.data[action.payload.roomId].devices[action.payload.deviceId] = {
                name: action.payload.deviceName,
                on : false,
                dim: 100,
                color: '#ffffff'
            }
        },
        deleteRoom: (state, action) => {
            //delete a room and associated devices from the store
            //payload contains: roomId
            delete state.data[action.payload.roomId]
        },
        deleteDevice: (state, action) => {
            //delete a device from the store
            //payload contains: roomId, deviceId
            delete state.data[action.payload.roomId].devices[action.payload.deviceId]
        },
      }

})

export const {
        expandRoom,
        switchDevice,
        dimDevice,
        displayColorPicker,
        changePickerColor,
        validatePickerColor,
        cancelPickerColor,
        addRoom,
        addDevice,
        deleteRoom,
        deleteDevice,
    } = lightsSlice.actions

export default lightsSlice.reducer
