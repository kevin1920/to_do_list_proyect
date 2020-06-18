import React from 'react'
import {Modal,ModalHeader,ModalBody} from 'reactstrap'

const TaskDescription = props => {

    let {isOpen,onChance,info} = props

    return(
        <Modal isOpen={isOpen} style={{marginTop:"150px"}}>
                <ModalHeader>
                    Create new task
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"  style={{marginLeft: "280px" }} onClick={onChance}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </ModalHeader>
                <ModalBody>
                    <p>{info}</p>
                </ModalBody>
        </Modal>
    )
}

export default TaskDescription