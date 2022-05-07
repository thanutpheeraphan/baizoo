import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Filter from "../Filter/Filter";
import ScrollBox from "../ScrollableBox/ScrollBox";
import CategoryBox from "../CategoryBox/CategoryBox";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
//   console.log(props.userLat);
//   console.log(props.userLong);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [category, setCategory] = React.useState([]);
//   const url = new URL(
// 	"https://baizoo-api-staging.herokuapp.com/travel/spots"
//   );
  const testprocess = String(process.env.REACT_APP_API_URL);
  const url = new URL(testprocess);
//   console.log("Origin: " + url.origin);
//   console.log("Pathname: " + url.pathname);

//   const add_params = category.map((uri) => ({ category: uri }));



let temp = "categories=";



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    console.log(value);
    console.log(category);
	const newString = new URLSearchParams (category.map(item => ('&'+temp+item.toLowerCase())).join(""));
	const newLatLngURL = new URLSearchParams(`lat=${props.userLat}&long=${props.userLong}`);
	const new_url = new URL(`${url.origin}${url.pathname}?${newLatLngURL}&${newString}`);
	console.log(new_url.href);
	props.uri(new_url.href);
    // console.log(add_params_dict);
	// console.log(new_params);
    // fetchAPI();
  };

  const getScrollBar = (newValue) => {
    setValue(newValue);
  };

  const getCategory = (newCategoryValue) => {
    setCategory(newCategoryValue);
  };


  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Select Filters
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Filters
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <Filter getScrollBar={getScrollBar} />
          <ScrollBox />
          <CategoryBox getCategory={getCategory} />
        </List>
      </Dialog>
    </div>
  );
}
