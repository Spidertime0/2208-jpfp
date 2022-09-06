import React from 'react'
import { useSelector } from 'react-redux'
import SingleCampus from './SingleCampus'

function Campus (props) {
    const name = props.campus.name
    const image = props.campus.imageUrl
    const address = props.campus.address
    const description = props.campus.description


    return (
        <div className='campus'>
            <h4><button onClick={'Delete Campus'}>X</button>{name}</h4>
            <button onClick={SingleCampus}>See campus</button><button onClick={'Update'}>Update campus</button>
            <p>Image: {image}</p>
            <p>Address: {address}</p>
            <p>Description: {description}</p>
            
        </div>
    )
}

export default Campus