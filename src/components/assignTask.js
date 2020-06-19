import React from 'react'
import {Modal,ModalHeader,ModalBody} from 'reactstrap'

const AssignTask = props => {

    let {isOpen,onChance,assign,list,indexProject} = props
    
    let listUsers = list[indexProject].users

    let fillList = (user,index) => {
        return(
            <tr key={index}>
                <td>{user}</td>
                <td><button type="button" className="btn btn-primary" onClick={() => assignUser(index)}>Assign task</button></td>
            </tr>
        )
    }

    let assignUser = index => {
        let inCharge = listUsers[index]
        list[indexProject].tasks[assign].inCharge = inCharge
        localStorage.setItem('projects',JSON.stringify(list))
        onChance()
    }

    return(
        <Modal isOpen={isOpen} style={{marginTop:"150px"}}>
                <ModalHeader>
                    Create new task
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"  style={{marginLeft: "280px" }} onClick={onChance}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </ModalHeader>
                <ModalBody>
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">Username</th>
                            <th scope="col">Assign</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listUsers.map(fillList)}
                        </tbody>
                    </table>
                </ModalBody>
        </Modal>
    )
}

export default AssignTask