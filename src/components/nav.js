import React from 'react'

const Nav = props => {

    let {name} = props

    return (
        <div class="shadow p-3 mb-5 bg-white" style={{backgroundColor:"#fff"}}>
            <ul class="nav nav-pills nav-fill">
                <li class="nav-item">
                <h1>{name}</h1>
                </li>
                <li class="nav-item">
                    <h1>To do List</h1>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/projects" style={{fontSize:"25px",color:"black"}}>Sign Out</a>
                </li>
            </ul>
        </div>
    )
}

export default Nav