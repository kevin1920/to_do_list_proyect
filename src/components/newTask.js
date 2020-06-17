import React,{useState} from 'react'
import {Modal,ModalHeader,ModalBody} from 'reactstrap'

const NewTask = () => {

    const [state,setState] = useState(false)

    return (
        <div>
            <button type="button" class="btn btn-primary" style={{marginLeft:"690px"}} onClick={() => setState(true)} >New task</button>
            <Modal isOpen={state} style={{marginTop:"150px"}}>
                <ModalHeader>
                    Create new task
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"  style={{marginLeft: "280px" }} onClick={() => setState(false)}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </ModalHeader>
                <ModalBody>
                    <form>
                        <div className="form-group">
                            <label for="task name">task name</label>
                            <input type="text" class="form-control" placeholder="Enter the task name" name="txtTaskName"></input>
                        </div>
                        <div className="form-group">
                            <label for="project description">task description</label>
                            <textarea className="form-control" placeholder="Enter the task description"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Create</button>
                    </form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default NewTask