import axios from 'axios';
import React, {useState, useEffect} from 'react'

//action type constants
const LIST_STUDENTS = 'LIST_STUDENTS'
const PREVIEW_STUDENT = 'PREVIEW_STUDENT';
const ADD_STUDENT = 'ADD_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';
const UPDATE_STUDENT = 'UPDATE_STUDENT';

//action creators
const _listStudents = (student) => {
    return {
        type: LIST_STUDENTS,
        student
    }
}
const _previewStudent = (student) => {
    return {
        type: PREVIEW_STUDENT,
        student
    };
};

const _addStudent = (student) => {
    return {
        type: ADD_STUDENT,
        student
    };
};

const _deleteStudent = (student) => {
    return {
        type: DELETE_STUDENT,
        student
    };
};

const _updateStudent = (student) => {
    return {
        type: UPDATE_STUDENT,
        student
    }
}

//Thunk creators
export const listStudents = () => {
    return async (dispatch) => {
        const data = await axios.get('/api/students')
        dispatch(_listStudents(data.data))
    }
}
export const previewStudents = (student) => {
    return async (dispatch) => {
        const { data: previewed} = await axios.get(`/api/students/${student.id}`)
        dispatch(_previewStudent(previewed))
    }
}

export const addStudent = (student) => {
    return async (dispatch) => {
        dispatch(_addStudent(student));
    }
}

export const deleteStudent = (student) => {
    return async (dispatch) => {
        const data = await axios.delete(`/api/students/delete/${student.id}`)
        dispatch(_deleteStudent(student))
    }
}

export const updateStudent = (student) => {
    return async (dispatch) => {
        const data = await axios.put(`/api/students/put/${student.id}`)
        dispatch(_updateStudent(student))
    }
}

//Reducer function
export const studentReducer = (state = [], action) => {
    switch(action.type){
        case LIST_STUDENTS:
            return action.student
        case PREVIEW_STUDENT:
            return action.student
        case ADD_STUDENT:
            action.student.id = [...state].length + 1
            return [...state, action.student]
        case DELETE_STUDENT:
            return state.filter((student) => student.id !== action.student.id);
        case UPDATE_STUDENT:
            return  state.map((student) => { 
                if (student.id === action.student.id){
                    return {
                        ...student,
                        firstName: action.student.firstName,
                        lastName: action.student.lastName,
                        email: action.student.email
                    }
                }
            })
        default:
            return state
    }
    
}