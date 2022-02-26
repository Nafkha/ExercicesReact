import React,{useState} from 'react'
import './style.css'

export default function ThirdState() {
    const [cls,setCls] = useState("initCls")
  return (
    <div>
        <h1 className={cls}>Youssef</h1>
        <button onClick={()=>setCls("secCls")}>Changer Couleur</button>
        <button onClick={()=>setCls("thirdCls")}>Changer Couleur</button>
    </div>
  )
}
