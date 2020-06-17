import React, {useState} from 'react'
import TaskDescription from '../components/taskDescription'

const ListTask = () => {

    const [stateDetails,setStateDetails] = useState(false)

    let handleCloseDetails = () => {
        setStateDetails(false)
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
                        <tr>
                        <th>Create the table</th>
                        <td><button type="button" class="btn btn-primary" onClick={() => setStateDetails(true)}>Details</button></td>
                        <td><button type="button" class="btn btn-primary">Modify</button></td>
                        <td><button type="button" class="btn btn-primary">Delete</button></td>
                        <td><button type="button" class="btn btn-primary">Assign</button></td>
                        <th></th>
                        <td><input type="checkbox"/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <TaskDescription
                isOpen = {stateDetails}
                onChance = {handleCloseDetails}
                info = "Description"
            />
        </div>
    )
}

export default ListTask