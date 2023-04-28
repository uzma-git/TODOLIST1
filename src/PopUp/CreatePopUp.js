import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './CreatePopUp.css'
const CreatePopUp = ({ modal, toggle, save}) => {
  let [taskName, setTaskName] = useState('')
  let [status, setStatus] = useState('')

  let handleChange = (e) => {
    let { name, value } = e.target

    if (name === "taskName") {
      setTaskName(value)
    } else {
      setStatus(value)
    }
  }
let handleSave=()=>{
          let taskObj={}
          taskObj["Name"]=taskName
          taskObj["Status"]=status
          save(taskObj)
  }
 return (

    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create Task</ModalHeader>
      <ModalBody>
        <form className='frm'>
          <label>Task</label>
          <input type='text' value={taskName} onChange={handleChange} name="taskName"></input>
          <p>Status</p>
          <select id='ci'  onChange={handleChange}>
            <option value="inProgress">inProgress</option>
            <option value="Complete">Complete</option>
            <option value="inComplete">inComplete</option>
          </select>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave} >
          create
        </Button>{' '}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
);
};
export default CreatePopUp;