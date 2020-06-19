import React,{useState} from 'react'
import {Helmet} from 'react-helmet'
import Nav from '../components/nav'
import ListTask from '../components/listTask'
import NewTask from '../components/newTask'


const Board = () => {

    let indexProject = JSON.parse(localStorage.getItem('indexProject'))
    let projects = JSON.parse(localStorage.getItem('projects'))
    let name = JSON.parse(localStorage.getItem('name'))
    
    const [data,setData] = useState(projects)

    let handleData = () => {
        let updatedList = JSON.parse(localStorage.getItem('projects'))
        setData(updatedList)
    }
    
    return(
        <div>
            <Helmet>
            <style>{"body { background-color: #282c34; }"}</style>
            </Helmet>
            <Nav
                name={name}
            />
            <ListTask
                list = {data}
                onChange = {handleData}
                indexProject = {indexProject}
            />
            <NewTask
                list = {data}
                onChange = {handleData}
                indexProject = {indexProject}
            />   
        </div> 
    )
}

export default Board