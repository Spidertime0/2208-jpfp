import React from 'react'
import { useSelector } from 'react-redux'
import SingleCampus from './SingleCampus'
import { deleteCampus, previewCampus, updateCampus } from '../store/campus-reducers'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router'

function Campus (props) {
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const campuses = useSelector(state => state.campuses)
    const [campusName, setCampusName] = useState("")
    const {id} = useParams();

    const handleSeeCampus = async(evt) => {
        evt.preventDefault();
        dispatch(previewCampus(props.campus))

    }

    const handleDeleteCampus = (evt) => {
        evt.preventDefault();
        dispatch(deleteCampus(props.campus))
    }

    const handleNavigate = (evt) => {
        evt.preventDefault();

        Navigate(`/campuses/${props.campus.id}`)
    }

    const name = props.campus.name
    const image = props.campus.imageUrl
    const address = props.campus.address
    const description = props.campus.description


    return (
        <div className='singleCampus'>
            <h4><button onClick={handleDeleteCampus}>X</button>{name}</h4>
            <button onClick={handleNavigate}>See campus</button>
            <p>Image: {image}</p>
            <p>Address: {address}</p>
            <p>Description: {description}</p>
            
        </div>
    )
}

export default Campus