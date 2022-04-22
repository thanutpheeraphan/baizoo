import React from "react";
import GoogleMapReact from "google-map-react";
import ReactDom from 'react-dom';
import Marker from "../Marker/Marker";
import RoomIcon from '@mui/icons-material/Room';
import FilterAltIcon from "@mui/icons-material/FilterAlt";
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

const Map = () => {
  const isMobile = useMediaQuery("(min-width:600px)");
  const controlButtonDiv = document.createElement('div');
  // console.log(isMobile);
  const myLatLng = { lat: 13.756331, lng: 100.501762 };
  const ausLatLng = { lat: -25.9870530979263, lng: 133.95953531473327 };
  const classes = useStyle();
  // const isMobile = useMediaQuery('(min-width:600px)');

  const coordinates = { lat: 0, lng: 0 };
  // console.log( isMobile + "  hello");
  console.log("Map Ran");
  function test() {
    console.log("testing");
  }

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={myLatLng}
        center={myLatLng}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}

        options={''}
        onChange={''}
        onChildClick={''}
        // options={{ disableDefaultUI: true, zoomControl: true }}
        // onChange={(e) => {
        //   setCoords({ lat: e.center.lat, lng: e.center.lng });
        //   setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        // }}
        // onChildClick={(child) => setChildClicked(child)}
      >
        <RoomIcon
		//   color="primary"
		  sx={{color: 'red'}}
          text={"Test"}
          lat={myLatLng.lat}
          lng={myLatLng.lng}
          onClick={() => test()}
        />

        {/* <Fab variant="extended" className={classes.buttonCallout}>
          <FilterAltIcon sx={{ mr: 1 }} />
          Filter
        </Fab> */}
      </GoogleMapReact>,
	  {/* ReactDom.createPortal(<Fab variant="extended" className={classes.buttonCallout}>
          <FilterAltIcon sx={{ mr: 1 }} />
          Filter
        </Fab>, controlButtonDiv), */}
    </div>
  );
};

export default Map;
