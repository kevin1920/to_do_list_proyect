import React,{useState} from 'react'
import Welcome from '../components/welcome'
import CreateCard from '../components/createCard'
import FormNewProject from '../components/formNewProject'
import Card from '../components/card'
import '../components/styles/projects.css'

const Projects = () => {
   
    const [stateButton,setStateButton] = useState(false)


    let handleButton = () => {
        setStateButton(true)
    }

    let handleBtnClose = () => {
        setStateButton(false)
    }

    return(
        
        <div className="Projects">
            <div style={{height: `150px`, overflow: `hidden`}} ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: `100%`, width: `100%`}}><path d="M-37.02,203.57 C42.55,6.23 416.70,140.43 492.32,14.10 L500.22,0.30 L-3.15,-6.60 Z" style={{stroke: `none`, fill: `#fff`}}></path></svg></div>

            <Welcome
                name = "Armando"
            />
            <CreateCard
                onChange = {handleButton}
            />
            <FormNewProject
                onChange = {handleBtnClose}
                isOpen = {stateButton}
            />
            <Card/>
        </div>
        
    )
}

export default Projects