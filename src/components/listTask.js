import React, {useState,useEffect} from 'react'
import TaskDescription from './taskDescription'
import AssignTask from './assignTask'

const ListTask = () => {

    let listTask = [{name:'change the color',description:'color should be changed',charge:""},{name:'change the background',description:'the background is very ugly',charge:""}]

    const [stateDetails,setStateDetails] = useState(false)
    const [description,setDescription] = useState(null)
    const [stateAssign,setStateAssign] = useState(false)

    let renderList = (task,index) => {
        return(
            <tr key={index}>
                <th>{task.name}</th>
                <td><button type="button" class="btn btn-primary" onClick={() => catchDescription(index)}>Details</button></td>
                <td><button type="button" class="btn btn-primary">Modify</button></td>
                <td><button type="button" class="btn btn-primary">Delete</button></td>
                <td><button type="button" class="btn btn-primary" onClick={() => setStateAssign(true)}>Assign</button></td>
                <th></th>
                <td><input type="checkbox"/></td>
            </tr>
        )
    }

    let catchDescription = (index) => {
        setStateDetails(true)
        setDescription(listTask[index].description)
    }

    let handleCloseDetails = () => {
        setStateDetails(false)
    }

    let handleCloseAssign = () => {
        setStateAssign(false)
    }

    return(
        
        <div>
            <div style={{backgroundColor:"#fff",margin:"50px"}}>
                <table class="table">
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
                list = {[{name:'Juan'},{name:'Pepito'},{name:'Felipongo'}]}
            />
        </div>
    )
}

export default ListTask