import React,{useState} from 'react'

export default function SecondState() {
    const [text,setText] = useState({
        name:'Syrine',
        color:'black'
    })
  return (
    <div>
        <h1 style={{color:text.color}}>{text.name}</h1>
        <button onClick={()=>setText({name:text.name,color:'red'})}>Changer couleur</button>
    </div>
  )
}
