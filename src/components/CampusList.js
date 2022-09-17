import axios from 'axios';
import React, {useState, useEffect} from 'react'
import Campus from './Campus';
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchCampuses } from '../actions/campus-actions';
import configureStore from '../store';
import { addCampus, campusReducer, listCampuses } from '../store/campus-reducers';
import { useNavigate, useParams } from 'react-router';


const CampusList = () => {
    const campusStore = useSelector(state => state.campuses)
    const dispatch = useDispatch()
    const { id } = useParams;

    const [campusName, setCampusName] = useState("")
    const [campusAddress, setCampusAddress] = useState("")

    const Navigate = useNavigate();

    useEffect(() => {
        dispatch(listCampuses())
    }, [])

    const handleAddCampus = (evt) => {
        evt.preventDefault();
        dispatch(addCampus({name:campusName, address:campusAddress}))
    }

    return (
        <div id='campuses'>
            <h2>Campuses</h2>
            {
              campusStore && campusStore.map(campus => <Campus campus={campus} key={campus.id} />)
            }
            
            <h4>Add Campus</h4>
            <form id="add-campus-form" onSubmit={handleAddCampus}>
                <label htmlFor="campusName">Campus Name: </label><br/>
                <input
                    name="campusName"
                    value={campusName}
                    onChange={(e) => setCampusName(e.target.value)}
                    required
                />
                <br/>
                <label htmlFor="campusAddress">Campus Address: </label><br/>
                <input
                    name="campusAddress"
                    value={campusAddress}
                    onChange={(e) => setCampusAddress(e.target.value)}
                    required
                />
                <br/>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}


export default CampusList;