import React, {useState} from 'react'
import TaskDescription from './taskDescription'
import AssignTask from './assignTask'
import ModifyTask from './modifyTask'

const ListTask = props => {
    //localStorage.setItem('list',JSON.stringify([{name:'change the color',description:'the color should be changed',inCharge:'',complete:false},{name:'change the background',description:'the background is very ugly',inCharge:'',complete:false}]))
    //localStorage.setItem('listAssign',JSON.stringify([{name:'Juan'},{name:'Pepito'},{name:'Felipongo'}]))

    let {list,onChange,indexProject} = props

    let listTask = list[indexProject].tasks

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
                <td><button type="button" className="btn btn-primary" onClick={() => assignUser(index)}>Assign</button></td>
                <th>{task.inCharge}</th>
                <td><input type="checkbox" onChange={e => check(e,index)} defaultChecked={task.complete}/></td>
                <td><button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => deleteTask(index)}><span aria-hidden="true">&times;</span></button></td>
            </tr>
        )
    }

    
    let check = (e,index) => {
        
        list[indexProject].tasks[index].complete = e.target.checked
        localStorage.setItem('projects',JSON.stringify(list))
         
    }

    let deleteTask = index => {
        list[indexProject].tasks.splice(index,1)
        localStorage.setItem('projects',JSON.stringify(list))
        onChange()
    }

    
    let catchDescription = index => {
        setStateDetails(true)
        setDescription(listTask[index].description)
    }

    
    let catchTaskModify = index => {
        setStateModify(true)
        setTaskModify({name:listTask[index].name,description:listTask[index].description,index:index})
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
                        <th scope="col">Assign task</th>
                        <th scope="col">Person in charge</th>
                        <th scope="col">Complete task</th>
                        <th scope="col">Delete task</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listTask.map((task,index)=> renderList(task,index))}
                           
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
                list = {list}
                indexProject = {indexProject}
            />
            <ModifyTask
                isOpen = {stateModify}
                onChance = {handleCloseModify}
                task = {taskModify}
                list = {list}
                indexProject = {indexProject}
            />
        </div>
    )
}

export default ListTask