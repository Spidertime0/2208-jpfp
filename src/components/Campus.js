import React from 'react'

function Campus (props) {
    const name = props.campus.name

    return (
        <div className='campus'>
            <h1>I'm a single campus</h1>
            <p>{name}</p>
        </div>
    )
}

export default Campus