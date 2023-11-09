// import { Component } from 'react'
// import Loader from 'react-loader-spinner'
import './index.css'
const Eventitem=(props)=>{
    const{item,get1}=props
    const{imageUrl,name,location,registrationStatus}=item
    const onEventClick=()=>{
        get1(registrationStatus)
    }
    return(
        <div className='container'>
            <img src={imageUrl} className='eventimage' alt="eventimage"  onClick={onEventClick}/>
            <h3>{name}</h3>
            <h4>{location}</h4>
        </div>
    )
       
    }

export default Eventitem
