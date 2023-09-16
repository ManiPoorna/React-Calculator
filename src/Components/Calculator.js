import React, { useState } from 'react'

const Calculator = () => {
  const [num1,setNum1] = useState("");
  const [num2,setNum2] = useState("");
  const [error,setError] = useState("");
  const [success,setSuccess] = useState("");

  const doOperation = (value)=>{
    if(isNaN(num1) || isNaN(num2)){
      setError("Please Enter Numbers");
      setSuccess("");
      return;
    }
    if(num1=="" || num2==""){
      setError("Please fill both inputs");
      setSuccess("");
      return;
    }
    switch(value){
      case "+" :
        setSuccess(+num1+(+num2));
        setError("");
        return;
      case "-" :
        setSuccess(+num1-(+num2));
        setError("");
        return;
      case "*" :
        setSuccess(+num1*(+num2));
        setError("");
        return;
      case "/" :
        setSuccess(+num1/(+num2));
        setError("");
        return;
      
    }
  }
  return (
    <div  className='background'>
        <div className='container'>
        <h1>React Calculator</h1>
        <div className='inputs'>
            <input id='input' placeholder='Num1' type='text' onChange={(e)=>setNum1(e.target.value)} />
            <input id='input' placeholder='Num2' type='text' onChange={(e)=>setNum2(e.target.value)} />
        </div>
        <div className='buttons'>
            <button onClick={(e)=>doOperation("+")}  >+</button>
            <button onClick={(e)=>doOperation("-")} >-</button>
            <button onClick={(e)=>doOperation("*")} >*</button>
            <button onClick={(e)=>doOperation("/")} >/</button>
        </div>
        {
          error && 
          <div>
            <div className='error'>Error! </div>
            <div className='message'>{error}</div>
          </div>
        }
        {
          success && 
          <div>
            <div className='success'>Success!</div>
            <div className='message'>Result: {success}</div>
          </div>
        }
        </div>
    </div>
  )
}

export default Calculator