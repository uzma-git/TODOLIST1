import React, { useEffect, useState } from 'react'
import "./TodoList.css"
import CreatePopUp from '../PopUp/CreatePopUp'
import Items from './Items';
function TodoList() {
    const [modal, setModal] = useState(false);
    let [taskList, setTaskList] = useState([])
    let [filtervalue, setFilterValue] = useState('All')
    let [inputvalue, setInputValue] = useState("")

    const toggle = () => {
        setModal(!modal)
    }

    useEffect(() => {
        let Array = localStorage.getItem("taskList")
        if (Array) {
            let obj = JSON.parse(Array)
            setTaskList(obj)
        }
    }, [])

    let saveTask = (taskObject) => {
        let oldList = taskList
        oldList.push(taskObject)
        localStorage.setItem("taskList", JSON.stringify(oldList))
        setTaskList(oldList)
        setModal(false)
    }
    let deleteTask = (index) => {
        let tempList = [...taskList]
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
    }

    const updateListArray = (obj, index) => {
        let tempList = [...taskList]
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)



    }



    let filtering = (e) => {
        setFilterValue(e.target.value)
    }
    let FilteredCompleteItems = taskList.filter(a => {

        if (filtervalue === 'Complete' || filtervalue === 'inComplete') {
            return filtervalue === a.Status
        } else if (inputvalue === "") {
            return taskList
        }

    })
    return (
        <>
            <div>
                <nav>
                    <div><h1>Todo List</h1></div>
                    <div id="div2">
                        <button onClick={() => setModal(true)}>Create Task</button>

                        <input type="search" placeholder="Type to search" value={inputvalue}
                            onChange={(event) => setInputValue(event.target.value)}></input>

                        <select name="isAvailable" onChange={filtering} >
                            <option value='All'>All</option>
                            <option value='Complete'>Complete</option>
                            <option value='inComplete'>inComplete</option>
                        </select>

                    </div>
                </nav>
            </div>
            <div className='task-container'>
                {FilteredCompleteItems.map((obj, index) =>
                    <Items tasobj={obj} index={index} key={index} deleteTask={deleteTask} updateListArray={updateListArray} />)}
                {inputvalue === "" ? "" : taskList.filter((user) => user.Name.toLowerCase().includes(inputvalue)).map((obj, index) =>
                    <Items tasobj={obj} index={index} key={index} deleteTask={deleteTask} updateListArray={updateListArray} />)}
            </div>
            <CreatePopUp toggle={toggle} modal={modal} save={saveTask} />

        </>
    )
}
export default TodoList

