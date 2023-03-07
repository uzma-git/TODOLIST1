
// import { useState } from "react";

// import CreatTask from "./Components/CreatTask";
// import "./Todo_List.css"

// function App() {
//     let [createtask, setCreateTask] = useState(false)
//     let [filtervalue,setFilterValue] = useState('All')
//     // console.log("parent component")

//     let filtering=(event)=>{
//         setFilterValue(event.target.value)
//         // console.log(filtervalue)
//     }

//  return (
//         <div>
//             <nav>
//                 <div><h1>Todo List</h1></div>
//                 <div id="div2">
//                     <button onClick={() => { setCreateTask(true) }}>Create Task</button>

//                     <input type="text" placeholder="Type to search"></input>
//                      <select name="isAvailable" onChange={filtering}>
//                         <option value='All'>All</option>
//                         <option value='Complete'>Complete</option>
//                         <option value='inComplete'>inComplete</option>
//                     </select> 

//                 </div>
//             </nav>
//             {createtask && <CreatTask filter={filtervalue}/>}

//         </div>

//     )
// }
// export default App;




import React from 'react'
import TodoList from './Component2/TodoList'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <TodoList/>
      
    </div>
  )
}

export default App



