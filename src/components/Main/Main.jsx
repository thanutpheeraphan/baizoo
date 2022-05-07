import React, { useEffect, useState } from "react";

import { CssBaseline, Grid, useMediaQuery, Fab } from "@material-ui/core";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

import Marker from "../Marker/Marker";

import Header from "../Header/Header";
import List from "../List/List";
import Map from "../Map/Map";
import SimpleDialogDemo from "../SimpleDialog/SimpleDialog";
import FullScreenDialog from "../FullScreenDialog/FullScreenDialog";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import NewContext from "../../mycontext";

function Main(props) {
  const [userLat, setUserLat] = useState(0);
  const [userLong, setUserLong] = useState(0);
  const [loading, setLoading] = useState(false);
  const [uri, seturi] = useState("");
  const [data, setData] = useState([]);
  const [defaultData, setDefaultData] = useState([]);
  const [defaultUrl, setDefaultUrl] = useState("");
  const [pinID , setPinID] = useState(0);

  function getPosition(options) {
    return new Promise(function (resolve, reject) {
      return navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  }

  async function getLatLng() {
    try {
      //   setLoading(true);
      const position = await getPosition();
      console.log(position);
      setUserLat(position.coords.latitude);
      setUserLong(position.coords.longitude);
      fetchAPI(position.coords.latitude, position.coords.longitude);
      setLoading(true);
    } catch (err) {
      console.error(err.message);
    }
  }

  async function fetchAPI(lat, lng) {
    console.log("this is lat", lat);
    console.log("this is long", lng);

    // const url = new URL("https://baizoo-api-staging.herokuapp.com/travel/spots");
	// const url = new URL(process.env.REACT_APP_API_URL);
	const testprocess = String(process.env.REACT_APP_API_URL);
	const url = new URL(testprocess);
    const newLatLngURL = new URLSearchParams(`lat=${lat}&long=${lng}`);
    const new_url = new URL(`${url.origin}${url.pathname}?${newLatLngURL}`);
    console.log(new_url.href);
    let fetchURL = new_url.href;
    setDefaultUrl(fetchURL);
    try {
      const response = await fetch(fetchURL, {
        method: "GET",
      });

      let parseResponse = await response.json();
      setData(parseResponse);
      setDefaultData(parseResponse);

      console.log("This is default data ", defaultData);
    } catch (err) {
      console.error(err.message);
    }
  }

  function clearFilters() {
    console.log("This is original data ", defaultData);
    seturi(defaultUrl);
    setData(defaultData);
  }

  useEffect(() => {
    getLatLng();
    // fetchAPI();
    // getLatLng();
    // console.log(uri);
  }, []);

  return (
    <NewContext.Provider value={{pinID,setPinID}}>
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={8}>
          {loading ? (
            <Map userLat={userLat} userLong={userLong} uri={uri} data={data}>
              {/* <Marker text={"Test"} lat={myLatLng.lat} lng={myLatLng.lng}/> */}
            </Map>
          ) : (
            <Stack alignItems="center" justifyContent="center">
              <CircularProgress />
            </Stack>
          )}
        </Grid>
        <Grid item xs={12} md={4}>
          {/* <SimpleDialogDemo/> */}
          <Grid container spacing={2} style={{ margin: "10px" }}>
            <FullScreenDialog
              userLat={userLat}
              userLong={userLong}
              uri={seturi}
            />
            <Button variant="outlined" onClick={() => clearFilters()}>
              Clear Filter
            </Button>
          </Grid>

          {/* <Fab variant="extended" href="filter">
            <FilterAltIcon sx={{ mr: 1 }} />
            Filter
          </Fab> */}
          <List data={data} uri={uri} />
        </Grid>
      </Grid>
    </NewContext.Provider>
  );
}

export default Main;
