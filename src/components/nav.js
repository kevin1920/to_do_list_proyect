import React from 'react'

const Nav = props => {

    let {name} = props

    return (
        <div className="shadow p-3 mb-5 bg-white" style={{backgroundColor:"#fff"}}>
            <ul className="nav nav-pills nav-fill">
                <li className="nav-item">
                <h1>{name}</h1>
                </li>
                <li className="nav-item">
                    <h1>To do List</h1>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/projects" style={{fontSize:"25px",color:"black"}}>Sign Out</a>
                </li>
            </ul>
        </div>
    )
}

export default Nav