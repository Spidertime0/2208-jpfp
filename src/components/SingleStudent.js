import Student from "./Student";
import { useState } from "react";
import React from "react";



const SingleStudent = (id) => {

    const [student, setStudents] = useState([])
    useEffect(() => {
        const fetchStudents = async() => {
            const response = await axios.get('/students')
            setStudents(response.data)
            props.dispatchFetchStudents()
        }
        fetchStudents()
    }, []);

    return (
        <div id='students'>
            {student.map(student => <Student student={student} key={student.id} />)}
        </div>
    )
}

export default SingleStudent