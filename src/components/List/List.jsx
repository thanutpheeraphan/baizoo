import React, { useState } from 'react';
import {CircularProgress , Grid , Typography , InputLabel , MenuItem , FormControl , Select} from '@material-ui/core';  

import useStyles from './styles';

import PlaceDetails from '../PlaceDetails/PlaceDetails'


const List = () => {
	const classes = useStyles();
	const [type , setType] = useState('restaurants');
	const [rating , setRating] = useState('');

	// const [elRefs, setElRefs] = useState([]);

	const places = [
		{name : 'Test Place 1'},
		{name : 'Test Place 2'},
		{name : 'Test Place 3'},
		{name : 'Test Place 4'},
		{name : 'Test Place 5'},
		{name : 'Test Place 6'},
		{name : 'Test Place 7'},
	];
  
	// useEffect(() => {
	//   setElRefs((refs) => Array(places.length).fill().map((_, i) => refs[i] || createRef()));
	// }, [places]);
  
	return (
	  <div className={classes.container}>
		 <>
			<FormControl className={classes.formControl}>
			  <InputLabel id="type">Type</InputLabel>
			  <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
				<MenuItem value="restaurants">Restaurants</MenuItem>
				<MenuItem value="hotels">Category</MenuItem>
				<MenuItem value="attractions">Attractions</MenuItem>
			  </Select>
			</FormControl>
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
			  {places?.map((place, i) => (
				<Grid key={i} item xs={12}>

				  <PlaceDetails  place={place} />
				</Grid>
			  ))}
			</Grid>
		  </>
		
	  </div>
	);
  };
  
  export default List;