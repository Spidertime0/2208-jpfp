import Campus from "./Campus";
import { useEffect, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { deleteCampus, updateCampus } from "../store/campus-reducers";



const SingleCampus = (props) => {
    const campusStore = useSelector(state => state.campuses)
    const {id} = useParams();
    const campus = campusStore.find((campus) => campus.id === parseInt(id))

    const [campusName, setCampusName] = useState("")
    const [campusAddress, setCampusAddress] = useState("")

    const Navigate = useNavigate();

    const dispatch = useDispatch();
    
    const name = campus.name
    const image = campus.imageUrl
    const address = campus.address
    const description = campus.description

    const handleDeleteCampus = (evt) => {
        evt.preventDefault();
        dispatch(deleteCampus(campus))
        Navigate('/campuses')
    }

    const handleUpdateCampus = (evt) => {
        evt.preventDefault();
        const updatedCampus = {
            ...campus,
            name: campusName,
            address: campusAddress
        }
        dispatch(updateCampus(updatedCampus))
        Navigate('/campuses')

    }

    const handleReturn = (evt) => {
        evt.preventDefault();
        Navigate('/campuses')
    }

    return (
        <>
        <div id='campus'>
            <h4><button onClick={handleDeleteCampus}>X</button>{name}</h4>
            <p>Image: {image}</p>
            <p>Address: {address}</p>
            <p>Description: {description}</p>
        </div>
        <div id='update-campus'>
            <h3>Update Campus</h3>
        <form id="add-campus-form" onSubmit={handleUpdateCampus}>
                <label htmlFor="campusName">Campus Name: </label><br/>
                <input
                    name="campusName"
                    value={campusName}
                    onChange={(e) => setCampusName(e.target.value)}
                />
                <br/>
                <label htmlFor="campusAddress">Campus Address: </label><br/>
                <input
                    name="campusAddress"
                    value={campusAddress}
                    onChange={(e) => setCampusAddress(e.target.value)}
                />
                <br/>
                <input type="submit" value="Submit"></input>
            </form>
            <br/>
            <button onClick={handleReturn}>Return to Campuses</button>
        </div>
        </>
    )
}

export default SingleCampus