import React from 'react'
import './styles/welcome.css'

const Welcome = props => {

    let {name} = props

    return (
        <div>
            <h1 id="welcome">Welcome {name}</h1>
        </div>
    )
}

export default Welcome





