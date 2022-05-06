import React, { useEffect, useState } from 'react';
import {CircularProgress , Grid , Typography , InputLabel , MenuItem , FormControl , Select} from '@material-ui/core';  

import useStyles from './styles';

import PlaceDetails from '../PlaceDetails/PlaceDetails'


const List = (props) => {
	const classes = useStyles();
	const [type , setType] = useState('restaurants');
	const [rating , setRating] = useState('');
	const [mapData, setMapData] = useState([]);
	const [updatedUri , setUpdatedUri] = useState("");


	// const [elRefs, setElRefs] = useState([]);

	async function fetchAPI() {
		console.log("Props.URI: ",props.uri);
		var fetchURL = props.uri;
		try {
		  const response = await fetch(fetchURL, {
			method: "GET",
		  });
	
		  let parseResponse = (await response.json());
		  setMapData(parseResponse);
	
		
		} catch (err) {
		  console.error(err.message);
		}
	  }

	useEffect(()=>{
		fetchAPI();
	},[props.uri])

	// useEffect(()=>{
	// 	fetchAPI();
	// },[mapData])



	useEffect(()=>{
		setMapData(props.data);
	},[props.data])
	
	// useEffect(() => {
	//   setElRefs((refs) => Array(places.length).fill().map((_, i) => refs[i] || createRef()));
	// }, [places]);
  
	return (
	  <div className={classes.container}>
		 <>
		 <h1>List of places</h1>
			{/* <FormControl className={classes.formControl}>
			  <InputLabel id="type">Type</InputLabel>
			  <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
				<MenuItem value="restaurants">Restaurants</MenuItem>
				<MenuItem value="hotels">Category</MenuItem>
				<MenuItem value="attractions">Attractions</MenuItem>
			  </Select>
			</FormControl> */}
			{/* <FormControl className={classes.formControl}>
			  <InputLabel id="rating">Rating</InputLabel>
			  <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
				<MenuItem value="">All</MenuItem>
				<MenuItem value="3">Above 3.0</MenuItem>
				<MenuItem value="4">Above 4.0</MenuItem>
				<MenuItem value="4.5">Above 4.5</MenuItem>
			  </Select>
			</FormControl> */}
			<Grid container spacing={3} className={classes.list}>
			  {mapData?.map((mapDataItem, i) => (
				<Grid key={i} item xs={12}>

				  <PlaceDetails  place={mapDataItem.category} item={mapDataItem}/>
				</Grid>
			  ))}
			</Grid>
		  </>
		
	  </div>
	);
  };
  
  export default List;