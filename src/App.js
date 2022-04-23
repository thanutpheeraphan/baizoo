import "./App.css";
import { CssBaseline, Grid, useMediaQuery, Fab } from "@material-ui/core";
// import { AddIcon , EditIcon , NavigationIcon, FavoriteIcon} from "@mui/icons-material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

import Marker from "../src/components/Marker/Marker";

import Header from "../src/components/Header/Header";
import List from "../src/components/List/List";
import Map from "../src/components/Map/Map";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import Filter from "./components/Filter/Filter";
import Main from "./components/Main/Main";
import { Fragment } from "react";
import FilterPage from "./components/FilterPage/FilterPage";

function App() {
  const myLatLng = { lat: 13.756331, lng: 100.501762 };
  const ausLatLng = { lat: -25.9870530979263, lng: 133.95953531473327 };
  console.log("Ran!");
  return (
    <Fragment>
      <Router>
        <div>
          <CssBaseline />
          <Header />
        </div>

        <Switch>
          <Route
            exact
            path="/"
            // component={Main}
            render={(props) => <Main {...props} />}
          />
          <Route
            exact
            path="/filter"
			render={(props) => <FilterPage {...props} />}
          />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
