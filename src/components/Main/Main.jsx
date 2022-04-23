import React from "react";
import { CssBaseline, Grid, useMediaQuery, Fab } from "@material-ui/core";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

import Marker from "../Marker/Marker";

import Header from "../Header/Header";
import List from "../List/List";
import Map from "../Map/Map";

function Main(props) {
  return (
    
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={8}>
          <Map>
            {/* <Marker text={"Test"} lat={myLatLng.lat} lng={myLatLng.lng}/> */}
          </Map>
        </Grid>
        <Grid item xs={12} md={4}>
          <Fab variant="extended" href="filter">
            <FilterAltIcon sx={{ mr: 1 }} />
            Filter
          </Fab>
          <List />
        </Grid>
      </Grid>
    
  );
}

export default Main;
