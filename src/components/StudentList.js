import React, {useState, useEffect} from 'react'
import Student from './Student';
import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addStudent, listStudents } from '../store/student-reducers';


const StudentList = () => {
    
    const studentStore = useSelector(state => state.students)
    const dispatch = useDispatch()
    const { id } = useParams;

    const Navigate = useNavigate();
    
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [gpa, setGpa] = useState("")
    const [campus, setCampus] = useState("")
    
    useEffect(() => {
        dispatch(listStudents())
    }, []);


    const handleAddStudent = (evt) => {
        evt.preventDefault();
        dispatch(addStudent({firstName: firstName, lastName:lastName, email:email, gpa:gpa, campus:campus, id: (Math.floor(Math.random()*1000)) }))

    }
   
    return (
        <div id='students'>
            <h2>Students</h2>
            {
                studentStore && studentStore.map(student => <Student student={student} key={student.id} />)
            }
            <h4>Add Student</h4>
            <form id="add-student-form" onSubmit={handleAddStudent}>

                <label htmlFor="firstName">First name: </label><br/>
                <input 
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    /><br/>

                <label htmlFor="lastName">Last name: </label><br/>
                <input 
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    /><br/>

                <label htmlFor="email">Email: </label><br/>
                <input 
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    /><br/>

                <label htmlFor="gpa">GPA: </label><br/>
                <input 
                    name="gpa"
                    value={gpa}
                    onChange={(e) => setGpa(e.target.value)}
                    
                    /><br/>

                <label htmlFor="campus">Campus: </label><br/>
                <input 
                    name="campus"
                    value={campus}
                    onChange={(e) => setCampus(e.target.value)}
                    /><br/>

                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default StudentList