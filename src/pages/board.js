import React,{useState} from 'react'
import {Helmet} from 'react-helmet'
import Nav from '../components/nav'
import ListTask from '../components/listTask'
import NewTask from '../components/newTask'


const Board = () => {

    let list = JSON.parse(localStorage.getItem('list'))
    const [data,setData] = useState(list)

    console.log('hola')

    let handleData = () => {
        let updatedList = JSON.parse(localStorage.getItem('list'))
        setData(updatedList)
    }
    
    return(
        <div>
            <Helmet>
            <style>{"body { background-color: #282c34; }"}</style>
            </Helmet>
            <Nav
                name="Augustus"
            />
            <ListTask
                listTask = {data}
                onChange = {handleData}
            />
            <NewTask
                list = {data}
                onChange = {handleData}
            />   
        </div> 
    )
}

export default Board