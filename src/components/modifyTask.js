import React,{useState} from 'react'
import {Modal,ModalHeader,ModalBody} from 'reactstrap'

const ModifyTask = props => {

    let {isOpen,onChance,task,list,indexProject} = props

    const [state,setState] = useState({})

    let handleChance = e => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }

    let handleSubmit = e => {
        e.preventDefault()
        if(state.txtNewTaskName && state.txtNewDescription){
            list[indexProject].tasks[task.index].name = state.txtNewTaskName
            list[indexProject].tasks[task.index].description = state.txtNewDescription
            localStorage.setItem('projects',JSON.stringify(list))
        }else{
            if(state.txtNewTaskName){
                list[indexProject].tasks[task.index].name = state.txtNewTaskName
                list[indexProject].tasks[task.index].description = task.description
                localStorage.setItem('projects',JSON.stringify(list))
            }else{
                list[indexProject].tasks[task.index].name = task.name
                list[indexProject].tasks[task.index].description = state.txtNewDescription
                localStorage.setItem('projects',JSON.stringify(list))
            }
        }
        setState({})
        onChance()
    }

    return(
        <Modal isOpen={isOpen} style={{marginTop:"150px"}}>
            <ModalHeader>
                Modify task
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"  style={{marginLeft: "320px" }} onClick={onChance}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </ModalHeader>
            <ModalBody>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="task name">task name</label>
                        <input type="text" className="form-control" placeholder="Enter the new task name" name="txtNewTaskName" onChange={handleChance} defaultValue={task.name} ></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="project description">task description</label>
                        <textarea className="form-control" placeholder="Enter the new task description" name="txtNewDescription" onChange={handleChance} defaultValue={task.description} ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Modify</button>
                </form>
            </ModalBody>
        </Modal>
    )
}

export default ModifyTask