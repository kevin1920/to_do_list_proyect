import React from 'react'
import './styles/card.css'

const Card = props => {

    let {data,name} = props

    let handleClick = index => {
        localStorage.setItem('indexProject',JSON.stringify(index))
    }

    return(
    
        <div id="card">
            <div className="row justify-center">
                {data.map((project,index) => {
                    if(project.users.includes(name)){
                        return(
                            <div className="col-md-3" key={index}>
                                <div className="card" style={{width:"18rem",borderRadius:"10px"}}>
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{project.name}</h5>
                                        <p className="card-text">{project.description}</p>
                                        <a href="/board" className="btn btn-primary" onClick={() => handleClick(index)}>Open project</a>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        </div>        
    )
}

export default Card