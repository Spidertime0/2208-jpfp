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
    const {studentEmail, setStudentEmail} = useState("")

    const Navigate = useNavigate();

    const dispatch = useDispatch();

    const firstName = student.firstName
    const lastName = student.lastName
    const email = student.email
    const image = student.imageUrl
    const gpa = student.gpa

    const handleDeleteStudent = (evt) => {
        evt.preventDefault();
        console.log(student)
        dispatch(deleteStudent(student))
        Navigate('/students')
    }

    const handleUpdateStudent = (evt) => {
        evt.preventDefault();
        dispatch(updateStudent(student))
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

        <br/>
        <button onClick={handleReturn}>Return to Campuses</button>
</>
    )
}

export default SingleStudent