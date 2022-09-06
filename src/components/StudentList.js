import React, {useState, useEffect} from 'react'
import Student from './Student';
import axios from 'axios';


const StudentList = () => {
    const [students, setStudents] = useState([])
    useEffect(() => {
        const fetchStudents = async() => { 
            const response = await axios.get('/students')
            setStudents(response.data)
        }
        fetchStudents();
    }, []);
   
    return (
        <div id='students'>
            <h2>Students</h2>
            {
                students.map(student => <Student student={student} key={student.id} />)
            }
            <h4>Add Student</h4>
            <form action="/student/add">
                <label for="firstName">First name: </label><br/>
                <input type="text" id="firstName"></input><br/>
                <label for="lastName">Last name: </label><br/>
                <input type="text" id="lastName"></input><br/>
                <label for="email">Email: </label><br/>
                <input type="text" id="email"></input><br/>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default StudentList