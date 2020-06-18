import React,{useState} from 'react'
import {Helmet} from 'react-helmet'
import Welcome from '../components/welcome'
import CreateCard from '../components/createCard'
import FormNewProject from '../components/formNewProject'
import Card from '../components/card'
import '../components/styles/projects.css'

const Projects = () => {
   
    //localStorage.setItem('projects',JSON.stringify([{name:'calculator',description:'a calculator is going to be built'},{name:'the users list',description:'a list is going to be built'}]))
    let projects = JSON.parse(localStorage.getItem('projects'))

    const [stateButton,setStateButton] = useState(false)
    const [data,setData] = useState(projects)

    let handleButton = () => {
        setStateButton(true)
    }

    let handleBtnClose = () => {
        setStateButton(false)
    }

    return(
        
        <div>
            <Helmet>
                <style>{"body { background-color: #282c34; }"}</style>
            </Helmet>

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
                data = {data}
            />
            <Card
                data = {data}
            />
        </div>
        
    )
}

export default Projects