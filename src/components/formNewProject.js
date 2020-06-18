import React,{useState} from 'react'
import {Modal,ModalHeader,ModalBody} from 'reactstrap'


const FormNewProject = props => {

    let {isOpen,onChange,data} = props
    const [state,setState] = useState({})

    let handleChange = e => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }

    let handleSubmit = e => {
        e.preventDefault()
        let projectNew = {name:state.txtProjectName,description:state.txtDescription}
        let list = data
        list.push(projectNew)
        localStorage.setItem('projects',JSON.stringify(list))
        console.log(list)
        onChange()
    }

    return (
        <Modal isOpen={isOpen} style={{marginTop:"250px"}}>
            <ModalHeader>
                Create Project
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={onChange} style={{
                    marginLeft: "300px"
                }}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </ModalHeader>
            <ModalBody>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="project's name">project's name</label>
                        <input type="text" className="form-control" placeholder="Enter the project name" name="txtProjectName" onChange={handleChange}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="project description">project description</label>
                        <textarea className="form-control" placeholder="Enter the project description" name="txtDescription" onChange={handleChange} ></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Create</button>
                </form>
            </ModalBody>
        </Modal>
    )
}

export default FormNewProject