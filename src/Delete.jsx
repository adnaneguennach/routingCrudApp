import React, {useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Delete({deleter}){
    const { id } = useParams();
    const navigate = useNavigate()

    

    return(
       <>
        <button onClick={()=>{deleter(prev=>prev.filter((e,i)=> e.taskName !== id)); navigate("/list")}
        }>delete</button>
        </>
    )
}