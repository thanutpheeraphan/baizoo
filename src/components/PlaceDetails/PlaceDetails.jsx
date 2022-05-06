import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";

import useStyles from "./style.js";
import NewContext from "../../mycontext.js";

const PlaceDetails = (props) => {
  const {pinID,setPinID} = useContext(NewContext);
  const classes = useStyles();
  const [itemData, setItemData] = useState([]);
  const [categoryData, setItemCategory] = useState([]);

  useEffect(() => {
    // console.log("propsitem ", props.item);
    setItemData(props.item);
    // console.log(props.place);
    setItemCategory(props.place);
    return () => {
      setItemData([]); // This worked for me
      setItemCategory([]);
    };
  }, [props.place]);

  //   useEffect(() => {}, [categoryData]);

  //   console.log(itemData.image[0]);
  return (
    // <div>
    //   <h3>{itemData.name}</h3>
    //   {/* <h4>{itemData.image[0]}</h4> */}
    //   <img src={itemData.image[0]}  />
    // </div>
    <Card elevation={6}>
      <CardMedia
        style={{ height: 250 }}
        image={
          itemData.image
            ? itemData.image[0]
            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
        }
        title={itemData.name}
      />

      <CardContent>
        <Typography gutterBottom variant="h5">
          {itemData.name}
        </Typography>
        <Box display="flex" justifyContent="space-between" my={2}></Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Estimated Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {itemData.estimate_price ? itemData.estimate_price :"No estimated price"}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">{itemData.description}</Typography>
        </Box>
        {categoryData.map((item, index ) => {
          return (
            <Chip
              key={index}
              size="small"
              label={item}
              className={classes.chip}
            />
          );
        })}
      
	  {/* {place.phone && (
		<Typography variant="body2" color="textSecondary" className={classes.spacing}>
		  <PhoneIcon /> {place.phone}
		</Typography>
	  )} */}
      </CardContent>
      <CardActions>
        {/* onClick={() => window.open(place.web_url, '_blank')} */}
        <Button size="small" color="primary" 
		onClick={() => setPinID(itemData)}
		>
          Go to
        </Button>
        {/* <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
		Website
	  </Button> */}
      </CardActions>
    </Card>
  );
};

export default PlaceDetails;
