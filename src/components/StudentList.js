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
        </div>
    )
}

export default StudentList