import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { Slider } from "@material-ui/core";
import FilterListIcon from '@mui/icons-material/FilterList';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
  wrapIcon: {
    alignItems: "center",
    display: "flex",
  }
});

function Filter(props) {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} style={{marginTop: 1.0 + 'em'}}>
		<Typography variant="h5" component="div" gutterBottom className={classes.wrapIcon}>
        Kilometer<FilterListIcon/> 
      </Typography>
		
  
      <Grid container spacing={2}>
        <Grid item>
          <Typography>0</Typography>
        </Grid>

        <Grid item xs>
          <Slider value={value} onChange={handleChange} min={0} max={10}/>
        </Grid>
        <Grid item>
          <Typography>10</Typography>
        </Grid>

        <Grid item>
          <Typography>{value}</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Filter;
