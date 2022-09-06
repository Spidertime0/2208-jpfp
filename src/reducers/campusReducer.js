const ADD_CAMPUS = "ADD_CAMPUS"
const DELETE_CAMPUS = "DELETE_CAMPUS"
// const ADD_STUDENT = "ADD_STUDENT"
// const DELETE_STUDENT = "DELETE_STUDENT"

// //Campus actions
// const addCampusAction = (campus) => ({
//     type: ADD_CAMPUS, campus: campus
// })
// const deleteCampusAction = (campus) => ({
//     type: DELETE_CAMPUS, campusId: campus.id
// })

// //Student actions
// const addStudentAction = (student) => ({
//     type: ADD_STUDENT, student: student
// })

// const deleteStudentAction = (student) => ({
//     type: DELETE_STUDENT, student: student
// })

import { RECEIVE_CAMPUSES } from "../actions/campus-actions"

const initialState =
{
    campuses: []
}

    const campusReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_CAMPUSES:
            return {...state, campuses: [...state.campuses, ...action.campuses]}
        case ADD_CAMPUS:
            return {...state, campuses: [...state.campuses, action.campus]}
        case DELETE_CAMPUS:
            return {...state, campuses: state.campuses.filter(campus => campus.id !== action.campusId)}
        default:
            return state;
    }
}

export default campusReducer