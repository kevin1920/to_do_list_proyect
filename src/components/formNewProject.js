import React, {useState} from 'react'
import {Modal,ModalHeader,ModalBody} from 'reactstrap'


const FormNewProject = props => {

    let {isOpen,onChange} = props


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
            <form>
                <div className="form-group">
                    <label for="project's name">project's name</label>
                    <input type="text" class="form-control" placeholder="Enter the project name" name="txtProjectName"></input>
                </div>
                <div className="form-group">
                    <label for="project description">project description</label>
                    <textarea className="form-control" placeholder="Enter the project description"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Create</button>
            </form>
        </ModalBody>
    </Modal>
)
}

export default FormNewProject