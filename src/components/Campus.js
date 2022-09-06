import React from 'react'
import { useSelector } from 'react-redux'

function Campus (props) {
    const name = props.campus.name
    const image = props.campus.imageUrl
    const address = props.campus.address
    const description = props.campus.description


    return (
        <div className='campus'>
            <h4>{name}</h4>
            <p>Image: {image}</p>
            <p>Address: {address}</p>
            <p>Description: {description}</p>
        </div>
    )
}

export default Campus