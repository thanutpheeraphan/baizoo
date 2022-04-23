import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Box,
  Link,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import useStyle from "./styles";

const Header = () => {
  const classes = useStyle();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Baizoo
        </Typography>
        <Box display="flex">
          <Link variant="h6" href="/" underline="none" className={classes.title} color="inherit">
            Home
          </Link>
          <Typography variant="h6" className={classes.title}>
            Explore new places
          </Typography>
          {/* <Typography variant='h6' className={classes.title}>
						Home
					</Typography> */}
          {/* <Autocomplete> */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>

            <InputBase
              placeholder="Search..."
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
            />
          </div>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
