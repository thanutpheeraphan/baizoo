import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import ReactDom from "react-dom";
import Marker from "../Marker/Marker";
import RoomIcon from "@mui/icons-material/Room";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";

import {
  Paper,
  Typography,
  useMediaQuery,
  Fab,
  Container,
} from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";

import useStyle from "./styles";

const Map = (props) => {
  const [parseResponse, setParseResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  var fetchURL = "";
//   var customMarker = new google.maps.Marker({
//     position: new google.maps.LatLng(51.817116, 4.780616)
//   });

  async function fetchAPI() {
    try {
      const response = await fetch(fetchURL, {
        method: "GET",
      });

      setParseResponse(await response.json());
      setLoading(true);
      console.log(parseResponse);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
	setParseResponse(props.data)
    console.log("Use Effect Map");
    console.log("Props.uri: ", props.uri);
    if (props.uri == "") {
      setLoading(true);
      console.log("If");
      const url = new URL("https://titi-api.herokuapp.com/travel/spots");
      const newLatLngURL = new URLSearchParams(
        `lat=${props.userLat}&long=${props.userLong}`
      );
      const new_url = new URL(`${url.origin}${url.pathname}?${newLatLngURL}`);
      console.log(props.userLat + " , " + props.userLong);
      fetchURL = new_url.href;
    } else {
      console.log("Else");
      fetchURL = props.uri;
    }
    console.log("Fetched URL", fetchURL);
    fetchAPI();
  }, [props.uri,props.data]);

  // const { onClose, selectedValue, open } = props;

  // const handleClose = () => {
  //   onClose(selectedValue);
  // };

  // const handleListItemClick = (value) => {
  //   onClose(value);
  // };
  const isMobile = useMediaQuery("(min-width:600px)");
  const controlButtonDiv = document.createElement("div");
  // console.log(isMobile);
  const myLatLng = { lat: props.userLat, lng: props.userLong };
  const classes = useStyle();
  console.log("Map Ran");
  function test() {
    console.log("testing");
  }

  return (
    <div className={classes.mapContainer}>
      {loading ? (
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
          defaultCenter={myLatLng}
          center={myLatLng}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          options={""}
          onChange={""}
          onChildClick={""}
          // options={{ disableDefaultUI: true, zoomControl: true }}
          // onChange={(e) => {
          //   setCoords({ lat: e.center.lat, lng: e.center.lng });
          //   setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
          // }}
          // onChildClick={(child) => setChildClicked(child)}
        >
          <RoomIcon
            //   color="primary"
            sx={{ color: "red" }}
            text={"Test"}
            lat={myLatLng.lat}
            lng={myLatLng.lng}
            onClick={() => test()}
          />

          {parseResponse &&
            parseResponse.map((item, index) => {
              return (
                <RoomIcon
                  sx={{ color: "green" }}
                  text={"Test"}
                  lat={item.latitude}
                  lng={item.longtitude}
                  onClick={() => test()}
                ></RoomIcon>
              );
            })}
        </GoogleMapReact>
      ) : (
        <Stack alignItems="center" justifyContent="center">
          <CircularProgress />
        </Stack>
      )}
    </div>
  );
};

export default Map;
