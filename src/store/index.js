import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import campusReducer from "../reducers/campusReducer";
import reducer from "../reducers/reducerCombiner"
import studentReducer from "../reducers/studentReducer";

const rootReducer= combineReducers({
    campuses: campusReducer,
    students: studentReducer
})


function configureStore() {
    // return createStore(########, applyMiddleware(thunk));

    return createStore(rootReducer, applyMiddleware(thunk));
}

export default configureStore();