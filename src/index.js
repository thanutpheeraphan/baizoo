import React, { createContext } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Main from "./components/Main/Main";
import Filter from "./components/Filter/Filter";
import { CssBaseline } from "@mui/material";
import Header from "./components/Header/Header";
// import NewContext from "./mycontext";


ReactDOM.render(
  // <React.StrictMode>
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<Main/>}>
  //         {/* <Route path="main" element={<Main />}></Route> */}
  //         <Route path="filter" element={<Filter />}></Route>
  //       </Route>
  //     </Routes>
  //   </BrowserRouter>,

    <App />,

  //</React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
