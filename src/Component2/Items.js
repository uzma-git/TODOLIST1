
import React, { useState } from 'react';
import "./Item.css"
import { AiOutlineDelete } from 'react-icons/ai'

// import { GiCheckMark  } from 'react-icons/gi'
import {MdEditNote} from 'react-icons/md'
import EditTask from '../PopUp/EditTask';
const Items = ({tasobj,index,deleteTask, updateListArray}) => {
    let [modal,setModal] = useState(false)
  let handleDelete = ()=>{
        deleteTask(index)
  }

//   let handleComplete =()=>{
        let now = new Date()
        let dd = now.getDate()
        let mm = now.getMonth()
        let yyyy = now.getFullYear()
        let h = now.getHours()
        let m = now.getMinutes()
        
        let completedOn = dd + '-' + mm + '-' + yyyy+  '  at  '+h + ':' +m;
//   }

console.log(completedOn)

   let toggle = ()=>{
        setModal(!modal)
   }

   let updateTask = (tasobj)=>{
            updateListArray(tasobj,index)
   }

 return (
    < div id="main-container">
            <p id="course"><b><span style={{color:"red"}}>Name of the Task: </span> <span style={{color:"blue"}}>{tasobj.Name}</span></b></p>
            <p id="status"><b> <span  style={{color:"red"}}>Status:</span><span style={{color:"blue"}}> {tasobj.Status}</span></b></p>
            <p className='Created'><small> <span  style={{color:"red"}}>Created on:</span><span style={{color:"blue"}}> {completedOn}</span></small></p>                


        <div>
    <AiOutlineDelete className='delete' onClick={handleDelete} />
    <MdEditNote className='edit' onClick={()=>setModal(true)} />
    {/* <GiCheckMark className='check' onClick={handleComplete} /> */}
    </div>
    <EditTask modal={modal} toggle={toggle} tasobj={tasobj}updateTask={updateTask}/>
</div>
 
    );
};
export default Items;