import React,{useState,useEffect} from 'react'

function App() {
  const [items,setItems]=useState([])
  useEffect(()=>{
    fetch('https://dull-rose-turkey-tie.cyclic.app/attractions')
      .then(res=>res.json())
      .then((result)=>{
        setItems(result)
      })
  },[])
  return (
    <div>
      <h1>Attractions</h1>
      <ul>
      {items.map((item)=>(
        <li key={item.id}>
          {item.name}<br/>
          {item.detail}<br/>
          <img src={item.coverimage} alt={item.name}/>
        </li>
      ))}
      </ul>
    </div>
  )
}

export default App