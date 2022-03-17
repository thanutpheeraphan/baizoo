import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyle from './styles'


const Map = () => {
	const classes = useStyle();
	// const isMobile = useMediaQuery('(min-width:600px)');

	const coordinates = {lat: 0 , lng: 0};
	console.log( process.env + "  hello");
	return (
		<div className={classes.mapContainer}>
		<GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
		// options={''}
		// onChange={''}
		// onChildClick={''}
        // options={{ disableDefaultUI: true, zoomControl: true }}
        // onChange={(e) => {
        //   setCoords({ lat: e.center.lat, lng: e.center.lng });
        //   setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        // }}
        // onChildClick={(child) => setChildClicked(child)}
      ></GoogleMapReact>
		</div>
	);
}

export default Map;