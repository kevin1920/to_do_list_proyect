import React, {useState,useEffect} from 'react'
import TaskDescription from './taskDescription'
import AssignTask from './assignTask'
import ModifyTask from './modifyTask'

const ListTask = () => {
    //localStorage.setItem('list',JSON.stringify([{name:'change the color',description:'the color should be changed',inCharge:'',complete:false},{name:'change the background',description:'the background is very ugly',inCharge:'',complete:false}]))
    //localStorage.setItem('listAssign',JSON.stringify([{name:'Juan'},{name:'Pepito'},{name:'Felipongo'}]))

    let listTask = JSON.parse(localStorage.getItem('list'))

    const [stateDetails,setStateDetails] = useState(false)
    const [description,setDescription] = useState(null)
    const [stateAssign,setStateAssign] = useState(false)
    const [indexAssign,setIndexAssign] = useState('')
    const [stateModify,setStateModify] = useState(false)
    const [taskModify,setTaskModify] = useState({})

    
    let renderList = (task,index) => {
        return(
            <tr key={index}>
                <th>{task.name}</th>
                <td><button type="button" className="btn btn-primary" onClick={() => catchDescription(index)}>Details</button></td>
                <td><button type="button" className="btn btn-primary" onClick={() => catchTaskModify(index)}>Modify</button></td>
                <td><button type="button" className="btn btn-primary" onClick={() => deleteTask(index)}>Delete</button></td>
                <td><button type="button" className="btn btn-primary" onClick={() => assignUser(index)}>Assign</button></td>
                <th>{task.inCharge}</th>
                <td><input type="checkbox" onChange={e => check(e,index)} defaultChecked={task.complete}/></td>
            </tr>
        )
    }

    
    let check = (e,index) => {
        
        listTask[index].complete= e.target.checked
        localStorage.setItem('list',JSON.stringify(listTask))
         
    }

    let deleteTask = index => {
        listTask.splice(index,1)
        localStorage.setItem('list',JSON.stringify(listTask))
        window.location.reload(true);

    }

    
    let catchDescription = index => {
        setStateDetails(true)
        setDescription(listTask[index].description)
    }

    
    let catchTaskModify = index => {
        setStateModify(true)
        setTaskModify({name:listTask[index].name,description:listTask[index].description,index:index})
        setIndexAssign(index)
    }

    let assignUser = index => {
        setStateAssign(true)
        setIndexAssign(index)
    }

    let handleCloseDetails = () => {
        setStateDetails(false)
    }

    let handleCloseAssign = () => {
        setStateAssign(false)
    }

    let handleCloseModify = () => {
        setStateModify(false)
    }

    return(
        
        <div>
            <div style={{backgroundColor:"#fff",margin:"50px"}}>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Modify task</th>
                        <th scope="col">Delete task</th>
                        <th scope="col">Assign task</th>
                        <th scope="col">Person in charge</th>
                        <th scope="col">Complete task</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listTask.map(renderList)}
                           
                    </tbody>
                </table>
            </div>
            <TaskDescription
                isOpen = {stateDetails}
                onChance = {handleCloseDetails}
                info = {description}
            />
            <AssignTask
                isOpen = {stateAssign}
                onChance = {handleCloseAssign}
                assign = {indexAssign}
            />
            <ModifyTask
                isOpen = {stateModify}
                onChance = {handleCloseModify}
                task = {taskModify}
            />
        </div>
    )
}

export default ListTask