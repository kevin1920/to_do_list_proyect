import React from 'react'
import AddImage from '../images/add.png'
import './styles/createCard.css'


const CreateCard = props => {

    let {onChange} = props

    return (
        <div id="createCard">
            <div className="row justify-center">
                <div className="col-sm-4">
                    <div className="card" style={{width:"18rem",borderRadius:"10px"}}>
                        <img src={AddImage} className="card-img-top"/>
                        <div className="card-body text-center">
                            <h4 className="card-tittle">Card Title</h4>
                            <p className="card-text text-secondary">
                                In this card you can create a new project
                            </p>
                            <button type="button" className="btn btn-primary" onClick={onChange}>Create project</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateCard



