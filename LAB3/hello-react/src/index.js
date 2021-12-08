import React from "react";
import ReactDom from "react-dom";
import "./index.css";

import Car from "./components/Car";
import List from "./components/List";
import UI from "./components/UI";

import DataTable from "./components/Table";

ReactDom.render(
  <>
    <Car age="25" eye="black" />
    <List />
    <UI />
    <DataTable />
  </>,
document.getElementById("root")
);

