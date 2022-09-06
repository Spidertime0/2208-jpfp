const { combineReducers } = require("@reduxjs/toolkit");
import campusReducer from "./campusReducer";
const { default: studentReducer } = require("./studentReducer");

export const reducerCombiner = combineReducers({
    campus: campusReducer, 
    student: studentReducer
})