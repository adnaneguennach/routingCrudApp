import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Create({addData}){
    const [formData, setformData] = useState({taskName:"", duration : "", details : ""})
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        addData(formData)
        alert('success')
        navigate('/List')
    }
    const handleChange = (e) =>{
        const {value, name} = e.target
        setformData({...formData, [name] : value})
    }

    return(
        <form onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-2">
            <label htmlFor="taskName">Task Name:</label>
            <input
                type="text"
                name="taskName"
                id="taskName"
                value={formData.taskName}
                onChange={handleChange}
                className="border p-2"
            />
        </div>
        <div className="flex flex-col space-y-2">
            <label htmlFor="duration">Duration:</label>
            <input
                type="text"
                name="duration"
                id="duration"
                value={formData.duration}
                onChange={handleChange}
                className="border p-2"
            />
        </div>
        <div className="flex flex-col space-y-2">
            <label htmlFor="details">Details:</label>
            <input
                type="text"
                name="details"
                id="details"
                value={formData.details}
                onChange={handleChange}
                className="border p-2"
            />
        </div>
        <button type="submit" className="mt-4 p-2 bg-blue-500 text-white">
            Submit
        </button>
    </form>
    )
}