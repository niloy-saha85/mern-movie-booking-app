import { combineReducers } from "@reduxjs/toolkit";
import latest from "./latest";
import upcoming from "./upcoming";
import popular from "./popular";
import details from "./details";

export default combineReducers({
  latest,
  upcoming,
  popular,
  details,
});
