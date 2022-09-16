import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import { campusReducer } from "./campus-reducers";
import { studentReducer } from "./student-reducers";


const rootReducer= combineReducers({
    campuses: campusReducer,
    students: studentReducer
})


function configureStore() {
    
    return createStore(rootReducer, applyMiddleware(thunk));
}

export default configureStore;