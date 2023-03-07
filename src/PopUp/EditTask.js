import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './CreatePopUp.css'
const EditTask = ({ modal, toggle, tasobj, updateTask }) => {
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
  useEffect(() => {
    setTaskName(tasobj.Name)
    setStatus(tasobj.Status)
  }, [tasobj])
const handleUpdate = (e) => {
    e.preventDefault()
    let tempObj = {}
    tempObj['Name'] = taskName
    tempObj['Status'] = status
    updateTask(tempObj)
  }
return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Update Task</ModalHeader>
      <ModalBody>
        <form className='frm'>
          <label>Task</label>
          <input type='text' value={taskName} onChange={handleChange} name="taskName"></input>
          <label>Status</label>
          <input type='text' value={status} onChange={handleChange} name="status"></input>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleUpdate}>
          update
        </Button>{' '}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};
export default EditTask;