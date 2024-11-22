import React, {useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Delete({deleteFnc}){
    const { id } = useParams();
    const navigate = useNavigate()


    return(
       <>
        <button onClick={()=>{deleteFnc(id); navigate("/list")}}>delete</button>
        </>
    )
}