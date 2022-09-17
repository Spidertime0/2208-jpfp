import Student from "./Student";
import { useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { campusReducer } from "../store/campus-reducers";
import { deleteStudent, updateStudent } from "../store/student-reducers";
import { useNavigate } from "react-router";


const SingleStudent = (props) => {
    const studentStore = useSelector(state => state.students)
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

    return (
        <>
        <div id='student'>
            <h4><button onClick={handleDeleteStudent}>X</button></h4>
            <p></p>
        </div>
        <div id='update-student'>
        <h3>Update Campus</h3>
        <form id="add-campus-form" onSubmit={handleUpdateStudent}>
                <label htmlFor="firstName">First Name: </label><br/>
                <input
                    name="studentFirstName"
                    value={studentFirstName}
                    onChange={(e) => setStudentFirstName(e.target.value)}
                />
                <br/>
                <label htmlFor="lastName">Last Name: </label><br/>
                <input
                    name="studentLastName"
                    value={studentLastName}
                    onChange={(e) => setStudentLastName(e.target.value)}
                />
                <br/>
                <label htmlFor="studentEmail">Email: </label><br/>
                <input
                    name="studentEmail"
                    value={studentEmail}
                    onChange={(e) => setStudentEmail(e.target.value)}
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