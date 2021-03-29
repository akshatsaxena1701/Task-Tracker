import React from 'react'
import {useState} from 'react'

const AddTask = (props) => {
    const [text,setText]=useState('')
    const [day,setDay]=useState('')

    const [reminder,setReminder]=useState(false)

    const onSubmit=(e)=>{
        e.preventDefault()
        if(!text){
            alert("Please add text for the task")
        }
        props.onAdd({text,day,reminder})

        setText('')
        setDay('')
        setReminder(false)
    }


    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' value={text} onChange={(e)=>{
                    setText(e.target.value)
                }} placeholder="Add task"></input>
            </div>
            <div className='form-control'>
                <label>Day and Time</label>
                <input type='text' value={day} onChange={(e)=>{
                    setDay(e.target.value)
                }} placeholder="Add day and time"></input>
            </div>
            <div className='form-control form-control-check'>
                <label>Set reminder</label>
                <input value={reminder} checked={reminder} onChange={(e)=>{
                    setReminder(e.currentTarget.checked)
                }} type='checkbox'></input>
            </div>
            <input className="btn btn-block" type="submit" value="Save Task"></input>

        </form>
    )
}

export default AddTask
