import React from 'react'
import Task from './Task'
const Tasks = (props) => {
    return (
        <>
            {
                props.tasks.map((task)=>(
                    <Task onToggle={props.onToggle}key={task.id} onDelete={props.onDelete} task={task}></Task>
                ))
            }
        </>
    )
}

export default Tasks
