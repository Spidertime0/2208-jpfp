import React from 'react'

function Campus (props) {
    const name = props.campus.name

    return (
        <div className='campus'>
            <h1>Campuses go here</h1>
            <p>{name}</p>
        </div>
    )
}

export default Campus