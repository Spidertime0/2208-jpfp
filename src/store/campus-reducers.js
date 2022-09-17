import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';


//const dispatch = useDispatch();

//action type constants
const LIST_CAMPUSES = 'LIST_CAMPUSES'
const PREVIEW_CAMPUS = 'PREVIEW_CAMPUS';
const ADD_CAMPUS = 'ADD_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';

//action creators
const _listCampuses = (campus) => {
    return {
        type: LIST_CAMPUSES,
        campus
    }
}
const _previewCampus = (campus) => {
    return {
        type: PREVIEW_CAMPUS,
        campus
    };
};

const _addCampus = (campus) => {
    return {
        type: ADD_CAMPUS,
        campus
    };
};

const _deleteCampus = (campus) => {
    return {
        type: DELETE_CAMPUS,
        campus
    };
};

const _updateCampus = (campus) => {
    return {
        type: UPDATE_CAMPUS,
        campus
    }
}

//Thunk creators
export const listCampuses = () => {
    return async (dispatch) => {
        const data = await axios.get('/api/campuses')
        dispatch(_listCampuses(data.data))
    }
}
export const previewCampus = (campus) => {
    return async (dispatch) => {
        const previewed = await axios.get(`/api/campuses/${campus.id}`)
        dispatch(_previewCampus(previewed))
    }
}

export const addCampus = (newCampus) => {
    return async (dispatch) => {
        dispatch(_addCampus(newCampus));
    }
}

export const deleteCampus = (campus) => {
    return async (dispatch) => {
        const data = await axios.delete(`/api/campuses/delete/${campus.id}`)
        dispatch(_deleteCampus(campus))
        
    }
}

export const updateCampus = (campus) => {
    return async (dispatch) => {
        //const data = await axios.post(`/api/campuses/${campus.id}`, campus)
        dispatch(_updateCampus(campus))
    }
}

//Reducer function
export const campusReducer = (state = [], action) => {
    switch(action.type){
        case LIST_CAMPUSES:
            return action.campus
        case PREVIEW_CAMPUS:
            return action.campus
        case ADD_CAMPUS:
            action.campus.id = [...state].length + 1
            return [...state, action.campus]
        case DELETE_CAMPUS:
            return state.filter((campus) => campus.id !== action.campus.id);
        case UPDATE_CAMPUS:
            return  state.map((campus) => { 
                if (campus.id === action.campus.id){
                    return {
                        ...campus,
                        name: action.campus.name,
                        address: action.campus.address
                    }
                }
            })
        default:
            return state
    }
    
}



