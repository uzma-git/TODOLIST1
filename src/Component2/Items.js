
import React, { useState } from 'react';
import "./Item.css"
import { AiOutlineDelete } from 'react-icons/ai'
import {MdEditNote} from 'react-icons/md'
import EditTask from '../PopUp/EditTask';
const Items = ({tasobj,index,deleteTask, updateListArray}) => {
    let [modal,setModal] = useState(false)
  let handleDelete = ()=>{
        deleteTask(index)
  }

   let toggle = ()=>{
        setModal(!modal)
   }

   let updateTask = (tasobj)=>{
            updateListArray(tasobj,index)
   }

 return (
    < div id="main-container">
            <p id="course"><b>{tasobj.Name}</b></p>
            <p id="status">{tasobj.Status}</p>
        <div>
    <AiOutlineDelete className='delete' onClick={handleDelete} />
    <MdEditNote className='edit' onClick={()=>setModal(true)} />
    </div>
    <EditTask modal={modal} toggle={toggle} tasobj={tasobj}updateTask={updateTask}/>
</div>
 
    );
};
export default Items;