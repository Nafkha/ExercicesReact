import React,{useState} from 'react'
import './style.css'
export default function Todoitem(props) {
    const [todo,setTodo] = useState(props.status)
  return (
    <li className={todo}>{props.todo} <button onClick={()=>setTodo('done')}>Complete</button> </li>
   
  )
}
