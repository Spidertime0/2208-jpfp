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
    const { id } = useParams();

    //Need to import the function for displaying all campuses
    // useEffect(() => {
    //     dispatch()
    // })

    const handleSubmit = async(evt) => {
        evt.preventDefault();
        await dispatch(updateCampus({campuses}))
        Navigate('/campuses')
    }


    const handleSeeCampus = async(evt) => {
        evt.preventDefault();

    }

    const handleUpdateCampus = async(evt) => {
        evt.preventDefault()
    }

    const handleDeleteCampus = (evt) => {
        evt.preventDefault();
        console.log('Evt: ', evt)
        console.log('id: ', id)
        console.log('props', props.campus)
        dispatch(deleteCampus(props.campus))
    }

    const name = props.campus.name
    const image = props.campus.imageUrl
    const address = props.campus.address
    const description = props.campus.description


    return (
        <div className='singleCampus'>
            <h4><button onClick={handleDeleteCampus}>X</button>{name}</h4>
            <button onClick={handleSeeCampus}>See campus</button><button onClick={handleUpdateCampus}>Update campus</button>
            <p>Image: {image}</p>
            <p>Address: {address}</p>
            <p>Description: {description}</p>
            
        </div>
    )
}

export default Campus