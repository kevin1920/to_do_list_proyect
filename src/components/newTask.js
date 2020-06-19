import React,{useState} from 'react'
import {Modal,ModalHeader,ModalBody} from 'reactstrap'


const NewTask = props => {

    let {list,onChange,indexProject} = props

    const [stateModal,setStateModal] = useState(false)
    const [stateForm,setStateForm] = useState({})

    let handleChange = e => {
        setStateForm({
            ...stateForm,
            [e.target.name]:e.target.value
        })
    }

    let handleSubmit = e => {
        e.preventDefault()
        let newTask = {name:stateForm.txtTaskName,description:stateForm.txtDescription,inCharge:'',complete:false}
        let newList = list
        newList[indexProject].tasks.push(newTask)
        localStorage.setItem('projects',JSON.stringify(newList))
        onChange()
        setStateModal(false)
    }

    return (
        <div>
            <button type="button" className="btn btn-primary" style={{marginLeft:"690px"}} onClick={() => setStateModal(true)} >New task</button>
            <Modal isOpen={stateModal} style={{marginTop:"150px"}}>
                <ModalHeader>
                    Create new task
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"  style={{marginLeft: "280px" }} onClick={() => setStateModal(false)}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="task name">task name</label>
                            <input type="text" class="form-control" placeholder="Enter the task name" name="txtTaskName" onChange={handleChange} ></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="project description">task description</label>
                            <textarea className="form-control" placeholder="Enter the task description" name="txtDescription" onChange={handleChange}></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Create</button>
                    </form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default NewTask