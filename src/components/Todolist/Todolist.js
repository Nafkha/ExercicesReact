import React,{useState} from 'react'
import Todoitem from './Todoitem'


export default function Todolist() {
    const todoItems = [
        
    ]
    const [list,setList] = useState(todoItems)
    const [item,setItem] = useState('')
    function handleChange(event){
        console.log(item)
        setItem(event.target.value)

    }
    function handleAdd(){
        const newList = list.concat({todo:item,status:'todo'})
        console.log(newList)
        setList(newList);
    }
  return (
    <div>
        <input type="text" value={item} onChange={handleChange} />
        <button type='button' onClick={handleAdd}>Ajouter</button>
        <ul>
            {list.map((ti)=><Todoitem todo={ti.todo} status={ti.status}/>)}
        </ul>
    </div>
  )
}
