import React, {useState, useEffect} from 'react'
import Student from './Student';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';


const StudentList = () => {
    
    const studentStore = useSelector(state => state.students)
    const dispatch = useDispatch()
    const { id } = useParams;

    const Navigate = useNavigate();
    

    const [studentName, setStudentName] = useState("")
    

    useEffect(() => {
        const fetchStudents = async() => { 
            const response = await axios.get('/students')
            setStudents(response.data)
            dispatch(fetchStudents())
        }
    }, []);

    // useEffect(() => {
    //     const displayOneStudent = async(req, res) => {
    //         const response = await axios.get(`/students/${students.id}`)
    //         const params = req.params
    //         if (params.id === response.id){
    //             setStudents([res])
    //         }
    //         displayOneStudent();
    //     }
    // })

    function handleChange(event) {
        setStudents([event.target.value]);
    }
   
    return (
        <div id='students'>
            <h2>Students</h2>
            {
                students.map(student => (<><button onClick={handleChange}>See student</button>
                <Student student={student} key={student.id} /></>
                ))
            }
            <h4>Add Student</h4>
            <form action="/students/add">
                <label htmlFor="firstName">First name: </label><br/>
                <input type="text" id="firstName"></input><br/>
                <label htmlFor="lastName">Last name: </label><br/>
                <input type="text" id="lastName"></input><br/>
                <label htmlFor="email">Email: </label><br/>
                <input type="text" id="email"></input><br/>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default StudentList