import React from 'react'
import { useSelector } from 'react-redux'
import StudentList from './StudentList'

function Student (props) {
    const firstName = props.student.firstName
    const lastName = props.student.lastName
    const email = props.student.email
    const image = props.student.imageUrl
    const gpa = props.student.gpa
    const campus = props.student.campus
    const id = props.student.id

    return (
        <div className='student'>
            <p><button onClick={'Delete Student'}>X</button>{firstName} {lastName}</p>
            <button onClick={StudentList}>See student</button><button onClick={'Update'}>Update student</button>
            <p>Email: {email}</p>
            <p>Image: {image}</p>
            <p>GPA: {gpa}</p>
            <p>Campus: {campus}</p>
                
        </div>
    )
}

export default Student