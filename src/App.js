import "./App.css";
import { CssBaseline, Grid, useMediaQuery, Fab } from "@material-ui/core";
// import { AddIcon , EditIcon , NavigationIcon, FavoriteIcon} from "@mui/icons-material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

import Marker from "../src/components/Marker/Marker";

import Header from "../src/components/Header/Header";
import List from "../src/components/List/List";
import Map from "../src/components/Map/Map";

function App() {
  const myLatLng = { lat: 13.756331, lng: 100.501762 };
  const ausLatLng = { lat: -25.9870530979263, lng: 133.95953531473327 };
  console.log("Ran!");
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={8}>
  
            <Map>
              {/* <Marker text={"Test"} lat={myLatLng.lat} lng={myLatLng.lng}/> */}
			
            </Map>
           

        </Grid>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
