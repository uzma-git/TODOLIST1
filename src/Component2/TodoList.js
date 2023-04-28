


import React, { useEffect, useState } from 'react';
import "./TodoList.css";
import Items from './Items';
import ReactPaginate from 'react-paginate';
import CreatePopUp from '../PopUp/CreatePopUp';


function TodoList() {
    const [modal, setModal] = useState(false);
    let [taskList, setTaskList] = useState([])
    let [filtervalue, setFilterValue] = useState('All')
    let [inputvalue, setInputValue] = useState("")
    
    


    let [currentItems,setCurrentItems]= useState([])
    let [pageCount,setPageCount] = useState(0)
    let [itemOffset,setItemOffset] = useState(0)



    // const [listPerPage, setListPerPage] = useState(2);
    let [noofcards,setNoOfCards]  = useState(2)

    
    console.log(taskList)
     

   useEffect(()=>{
        const endOffset = itemOffset + noofcards;
        setCurrentItems(taskList.slice(itemOffset,endOffset))
        setPageCount(Math.ceil(taskList.length/noofcards))
   },[itemOffset,noofcards,taskList])


   const handlePageClick = (event) => {
        const newOffset = (event.selected * noofcards) % taskList.length;
        
        setItemOffset(newOffset);
      };
  
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

    console.log(taskList)
    

    let FilteredCompleteItems =  taskList.filter(a => {

        if (filtervalue === 'Complete' || filtervalue === 'inComplete') {
            return filtervalue === a.Status
        } else if (inputvalue === "" && filtervalue === 'Select') {
            return ""
        }else if(filtervalue === 'All'){
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

                        <select name="isAvailable" onChange={filtering} className="select">
                        <option value='Select'>Select</option>
       
                            <option value='All'>All</option>
                            <option value='Complete'>Complete</option>
                            <option value='inComplete'>inComplete</option>
                        </select>


                        <select  className="select" 
                
                value={noofcards}
                onChange={(e) => setNoOfCards(parseInt(e.target.value))}
              >
                <option>No of cards</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>

             </div>
                </nav>

           

            </div>
            <div className='task-container'>



        
          

  { FilteredCompleteItems.map((obj, index) =>
                    <Items tasobj={obj} index={index} key={index} deleteTask={deleteTask} 
                    updateListArray={updateListArray} />)}

                    
 {inputvalue === "" ? "" : taskList.filter((user) => user.Name.toLowerCase().includes(inputvalue)).map((obj, index) =>
            <Items tasobj={obj} index={index} key={index} deleteTask={deleteTask} 
            updateListArray={updateListArray}   />)}
        

                        
  { filtervalue === 'COmplete' || filtervalue === 'inComplete' || filtervalue === 'All' || inputvalue !== ""? " " : 
                currentItems.map((obj, index) =>
              <Items tasobj={obj} index={index} key={index} deleteTask={deleteTask}
               updateListArray={updateListArray}  />)}


            

                <div className="pagination">

                
                
      <ReactPaginate 
        previousLabel={"<<"}
        nextLabel={">>"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center mt-3"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
                    
                     </div>

            </div>

          <CreatePopUp    toggle={toggle} modal={modal} save={saveTask} />

        </>
    )
}
export default TodoList;






