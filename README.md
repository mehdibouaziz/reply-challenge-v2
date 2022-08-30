# Start the application
- cd to the folder and run 'npm start' to start the application.

# How to use
## Navigation Menu
A navigation menu can be displayed to switch between the pages, click on the menu icon (top left)
- Lights: this page allows to manage light devices as per assignment 2.1
- Manage devices: this page allows to manage the list of rooms and devices as per assignement 2.2

## Lights settings
- Each room has a list of devices, which can be collapsed or displayed with the arrow button
- Each device can be toggled ON/OFF with the switch input
- When OFF, additionnal settings are hidden
- When ON, the User can change the dimness with the range input, or click on the colored button to open a dialogue and choose the lights' color
- to pick a color, use the inputs to choose the hue, saturation and lightness. Once the color is picked, click the button to save it

## Manage devices
- Here rooms and devices can be added or deleted
- When adding a new room or devices, provide a name and a unique id
- if the provided id already exists, the new device will overwrite the previous one


# Timeline of developement:
- 2 hours: Setting up the project, creating the UI, controls for ON/OFF toggle and dimness. Snapshot: (2hours.png)
- 3.5 hours (+1.5h): Task 2.1 done, Color picker implementation. Should take only 0.5h to implement but it was difficult to find a component up-to-date for current React version. Finaly found a neat one: [React-colorful](https://www.npmjs.com/package/react-colorful). Snapshot: (3hours)
- 5 hours (+1.5h): RETROFIT of the app to use Redux in order to allow sharing the data with the manage page for task 2.2
- 6 hours (+1h): Implementation of react-router and create the UI for task 2.2. Snapshot(6 hours)
- 7 hours (+1h): Task 2.2 done, admin panel allows to add and delete devices and rooms, and the header now displays the current page. Snapshot: (7hours)