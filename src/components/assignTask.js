import React from 'react'
import {Modal,ModalHeader,ModalBody} from 'reactstrap'

const AssignTask = props => {

    let {isOpen,onChance,assign,list} = props

    let fillList = (user,index) => {
        return(
            <tr key={index}>
                <td>{user.name}</td>
                <td><button type="button" class="btn btn-primary">Assign task</button></td>
            </tr>
        )
    }

    return(
        <Modal isOpen={isOpen} style={{marginTop:"150px"}}>
                <ModalHeader>
                    Create new task
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"  style={{marginLeft: "280px" }} onClick={onChance}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </ModalHeader>
                <ModalBody>
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">Username</th>
                            <th scope="col">Assign</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map(fillList)}
                        </tbody>
                    </table>
                </ModalBody>
        </Modal>
    )
}

export default AssignTask