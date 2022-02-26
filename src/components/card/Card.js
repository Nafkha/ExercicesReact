import React from 'react'
import './Card.css'
export default function Card(props) {
  return (
    <div className='Card'>
        <img src={props.img} alt={props.title}/>
        <h3>{props.title}</h3>
    </div>
  )
}
