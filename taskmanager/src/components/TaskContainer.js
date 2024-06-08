import TaskContainer from './TaskContainer';
import {useState,useEffect} from 'react'
import axios from "axios";
import 'bootstrap';

function App(){
  const [tasks ,setTasks] = useState([])
  useEffect(()=>{
    axios.get('http://127.0.0.1:3060/api/tasks')
    .then((response)=>{
      setTasks(response.data)
    })
    .catch(err =>{
      console.log(err)
    })
  },[])
  const addTasks=(task)=>{
    setTasks([...tasks,task])
  }
  const deleteTasks = (id) =>{
    const newArr = tasks.filter(task =>{
      return task._id !== id
    })
    setTasks(newArr)
  }
  return (
    <div>
      <TaskContainer tasks={tasks}
                      addTasks ={addTasks}
                      deleteTasks= {deleteTasks}/>
    </div>
  )
}
export default App;