import React from 'react'
import './navbar.css'
export default function Navbar(props) {

  return (
    <div>
        <ul className='nav'>
            {props.menu.map((item)=><li><a href={item.url}>{item.title}</a></li>)}
        </ul>
    </div>
  )
}
