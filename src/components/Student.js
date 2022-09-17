import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { deleteStudent } from '../store/student-reducers'
import StudentList from './StudentList'

function Student (props) {
    const firstName = props.student.firstName
    const lastName = props.student.lastName
    const email = props.student.email
    const image = props.student.imageUrl
    const gpa = props.student.gpa
    const campus = props.student.foreignKey
    const id = props.student.id
    console.log(campus)
    const Navigate = useNavigate();
    const dispatch = useDispatch();

    const handleDeleteStudent = (evt) => {
        evt.preventDefault();
        dispatch(deleteStudent(props.student))

    }

    const handleNavigate = (evt) => {
        evt.preventDefault();
        Navigate(`/students/${id}`)
    }

    return (
        <div className='singleStudent'>
            <p><button onClick={handleDeleteStudent}>X</button>{firstName} {lastName}</p>
            <button onClick={handleNavigate}>View Student</button>
            <p>Email: {email}</p>
            <p>GPA: {gpa}</p>
            <p>Campus: {campus}</p>
                
        </div>
    )
}

export default Student