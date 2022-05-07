import React, { useContext, useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import ReactDom from "react-dom";
import RoomIcon from "@mui/icons-material/Room";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import FilterAltIcon from "@mui/icons-material/FilterAlt";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import { Loader } from "@googlemaps/js-api-loader";
import { Marker } from "@react-google-maps/api";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import {
  Paper,
  Typography,
  useMediaQuery,
  Fab,
  Container,
  Modal,
  Grid,
  Button,
} from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";
import Popover from "@mui/material/Popover";

import useStyle from "./styles";
import NewContext from "../../mycontext";
// import Modal from "./Modal";

const Map = (props) => {
  const { pinID, setPinID } = useContext(NewContext);

  const [itemData, setItemData] = useState([]);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event, item) => {
    console.log(item);
    setItemData(item);
    setAnchorEl(event.currentTarget);
    // console.log(event.currentTarget);
  };

  const gotoRestaurant = (lat, lng) => {
    window.open(`https://www.google.com/maps/place/${lat},${lng}`);
  };

  const newPin = () => {
    console.log(pinID);

    if (pinID) {
      window.open(
        `https://www.google.com/maps/place/${pinID.latitude},${pinID.longtitude}`
      );
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [parseResponse, setParseResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalState, setModalState] = useState(false);

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
      newPin();
      // handleClick(e, pinID)
    }, [pinID]);

  useEffect(() => {
    setParseResponse(props.data);
    console.log("Use Effect Map");
    console.log("Props.uri: ", props.uri);
    if (props.uri == "") {
      setLoading(true);
      console.log("If");
    //   const url = new URL(
    //     "https://baizoo-api-staging.herokuapp.com/travel/spots"
    //   );
      const testprocess = String(process.env.REACT_APP_API_URL);
      const url = new URL(testprocess);

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
  }, [props.uri, props.data]);

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

  //   function test() {
  // 	  return (
  // 		  <Modal/>
  // 	  );
  //     }
  const imageArray = itemData.image || [
    "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg",
  ];
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
            // onClick={handleClick}
          />

          <Popover
            id={itemData.id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Grid
              container
              direction="column"
              alignItems="center"
              style={{ padding: 7 + "px" }}
            >
              <h2 sx={{ p: 2 }}>{itemData.name}</h2>

              <img src={imageArray[0]} width="150px"></img>
              {itemData.latitude && (
                <Button
                  variant="outlined"
                  style={{ marginTop: 10 + "px" }}
                  onClick={() =>
                    gotoRestaurant(itemData.latitude, itemData.longtitude)
                  }
                >
                  <LocationOnIcon /> Travel to place
                </Button>
              )}
            </Grid>

            {/* <Typography sx={{ p: 2 }}>{itemData.id}</Typography> */}
          </Popover>

          {parseResponse &&
            parseResponse.map((item, index) => {
              return (
                <RoomIcon
                  sx={{ color: "green" }}
                  text={"Test"}
                  lat={item.latitude}
                  lng={item.longtitude}
                  onClick={(e) => handleClick(e, item)}
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
