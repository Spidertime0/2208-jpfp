import { useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudent, updateStudent } from "../store/student-reducers";
import { useNavigate, useParams } from "react-router";


const SingleStudent = (props) => {
    const studentStore = useSelector(state => state.students)
    const campusStore = useSelector(state => state.campuses)
    const {id} = useParams();
    const student = studentStore.find((student) => student.id === parseInt(id))

    const [studentFirstName, setStudentFirstName] = useState("")
    const [studentLastName, setStudentLastName] = useState("")
    const [studentEmail, setStudentEmail] = useState("")

    const Navigate = useNavigate();

    const dispatch = useDispatch();

    const firstName = student.firstName
    const lastName = student.lastName
    const email = student.email
    const image = student.imageUrl
    const gpa = student.gpa
    const campus = student.foreignKey

    const handleDeleteStudent = (evt) => {
        evt.preventDefault();
        dispatch(deleteStudent(student))
        Navigate('/students')
    }

    const handleUpdateStudent = (evt) => {
        evt.preventDefault();
        const updatedStudent = {
            ...student,
            firstName: studentFirstName,
            lastName: studentLastName,
            email: studentEmail

        }
        dispatch(updateStudent(updatedStudent))
        Navigate('/students')
    }

    const handleReturn = (evt) => {
        evt.preventDefault();
        Navigate('/students')
    }

    const handleViewCampus = (evt) => {
        evt.preventDefault();
        Navigate('/campuses/1')
    }

    return (
        <>
        <div id='student'>
            <h4><button onClick={handleDeleteStudent}>X</button>{firstName} {lastName}</h4>
            <p>Email: {email}</p>
            <img src={image} alt="student_image.png"/>
            <p>GPA: {gpa}</p>
            <p>Campus: {campus}</p><button onClick={handleViewCampus}>see campus</button>
        </div>
        <div id='update-student'>
        <h3>Update Student</h3>
        <form id="add-campus-form" onSubmit={handleUpdateStudent}>
                <label htmlFor="firstName">First Name: </label><br/>
                <input
                    name="studentFirstName"
                    value={studentFirstName}
                    onChange={(e) => setStudentFirstName(e.target.value)}
                    required
                />
                <br/>
                <label htmlFor="lastName">Last Name: </label><br/>
                <input
                    name="studentLastName"
                    value={studentLastName}
                    onChange={(e) => setStudentLastName(e.target.value)}
                    required
                />
                <br/>
                <label htmlFor="studentEmail">Email: </label><br/>
                <input
                    name="studentEmail"
                    value={studentEmail}
                    onChange={(e) => setStudentEmail(e.target.value)}
                    required
                />
                <br/>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
        <br/>
        <button onClick={handleReturn}>Return to Campuses</button>
</>
    )
}

export default SingleStudent