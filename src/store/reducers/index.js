import { combineReducers } from "@reduxjs/toolkit";
import latest from "./latest";
import upcoming from "./upcoming";
import nearby from "./nearby";

export default combineReducers({
  latest,
  upcoming,
  nearby,
});
