const { combineReducers } = require("@reduxjs/toolkit");
const { default: campusReducer } = require("./campusReducer");
const { default: studentReducer } = require("./studentReducer");

// export default rootReducer = combineReducers({
//     campus: campusReducer, 
//     student: studentReducer
// })