import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import Footer from "./components/Footer"
import {useState,useEffect} from 'react'
function App() {
  const [showAddTask,setShowAddTask]=useState(false)
  const [tasks,setTasks]=useState([])


useEffect(()=>{
  const getTasks=async()=>{
    const tasksFromserver=await fetchTasks()
    setTasks(tasksFromserver)
  }
  getTasks()
},[])

const fetchTasks=async()=>{
  const res=await fetch('http://localhost:5000/tasks')
  const data=await res.json()
  return data
}
const fetchTask=async(id)=>{
  const res=await fetch(`http://localhost:5000/tasks/${id}`)
  const data=await res.json()
  return data
}

const deleteTask =async (id)=>{
  await fetch(`http://localhost:5000/tasks/${id}`,{
    method:'DELETE',
  })

  setTasks(tasks.filter((task)=>
    task.id !== id))
}

const toggleReminder=async(id)=>{
  const taskToToggle=await fetchTask(id)
  const uptask=await {
    ...taskToToggle,reminder:!taskToToggle.reminder
  }
  const res=await fetch(`http://localhost:5000/tasks/${id}`,{
    method:'PUT',
    headers:{'Content-type':'application/json'},
    body:JSON.stringify(uptask)
  })

  const data=await res.json()


  setTasks(tasks.map((task)=>
    task.id === id ? {...task,reminder:!task.reminder}:task
  ))
}

const addTask = async(task)=>{
  const res=await fetch('http://localhost:5000/tasks',{
    method:'POST',
    headers:{
      'Content-type':'application/json'
    },
    body:JSON.stringify(task)
  })
  const data=await res.json()
  setTasks([...tasks,data])
}

const showForm=()=>{
  if(!showAddTask){
    setShowAddTask(true)
  }else{
    setShowAddTask(false)
  }
}

  return (
    <div className="container">
      <Header onButton={showForm} setBtnText={showAddTask}></Header>
      {showAddTask && <AddTask onAdd={addTask}></AddTask>}
      <Tasks onToggle={toggleReminder}tasks={tasks} onDelete={deleteTask}></Tasks>
      <Footer></Footer>
    </div>
  );
}

export default App;
