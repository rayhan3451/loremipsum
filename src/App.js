import React, { useState } from 'react';
import data from './data';
function App() {
  const [count,setCount] =useState(0)
  const [text,setText] =useState([])

  const handleSubmit=(e)=>{
    e.preventDefault();
    let ammount =parseInt(count);
    if (count <=0){
      ammount=1;
    }
    if (count>8){
      ammount=8;
    }
    setText(data.slice(0,ammount));
  }

  return (
    <section className="section-center">
      <h3>lorem ipsum generator</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="ammount">paragraph :</label>
        <input type="number" name="ammount" id="ammount" value={count} onChange={(e)=>setCount(e.target.value)}/>
        <button className="btn" onClick={handleSubmit}>generate</button>
      </form>
      {text.map((item,index)=>{
        return (
          <p key={index}>{item}</p>
        )
      })}
      
    </section>
    )
}

export default App;
