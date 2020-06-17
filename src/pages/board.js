import React, {useState} from 'react'
import {Helmet} from 'react-helmet'
import Nav from '../components/nav'
import ListTask from '../components/listTask'
import NewTask from '../components/newTask'


const Board = () => {

    const [stateNewTask,setStateNewTask] = useState(false)

    let handleNewTask = () => {
        setStateNewTask(true)
    }

    let handleCloseNewTask = () => {
        setStateNewTask(false)
    }
    
    return(
        <div>
            <Helmet>
            <style>{"body { background-color: #282c34; }"}</style>
            </Helmet>
            <Nav
                name="Augustus"
            />
            <ListTask/>
            <NewTask/>   
        </div> 
    )
}

export default Board