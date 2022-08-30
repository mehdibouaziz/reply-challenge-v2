import Header from "./components/Header";
import NavigationMenu from "./components/NavigationMenu";
import DeviceList from "./components/DeviceList";
import DeviceManager from "./pages/manage/DeviceManager";

import { Grid } from "@mui/material";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {
  const [displayMenu, setDisplayMenu] = useState(false)

  return (
    <Router>
      <div className="App">
        <Grid container>
          <Grid item xs={12}>
            <Header menuToggle={setDisplayMenu} />
          </Grid>

          <Grid item>
            <NavigationMenu display={displayMenu} menuToggle={setDisplayMenu}/>
          </Grid>

          <Routes>
            <Route exact path='/' element={
                <DeviceList />
            } />
            <Route path='/manage' element={
                <DeviceManager />
            } />

          </Routes>

        </Grid>
      </div>
    </Router>
  );
}

export default App;
