import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Delete({deleteFnc}){
    const { id } = useParams();
    const navigate = useNavigate()

    useEffect(()=>{
        deleteFnc(id); 
        navigate("/list");
    }, [])
    return(
       <>
            Task deleting   
        </>
    )
}