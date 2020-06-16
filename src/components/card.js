import React from 'react'
import './styles/card.css'

const Card = props => {

    return(
    
        <div id="card">
            <div className="row justify-center">
                <div className="col-md-3">
                        <div class="card" style={{width:"18rem"}}>
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                </div>
            </div>
        </div>        
    )
}

export default Card