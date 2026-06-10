import { useState } from 'react';
import './App.css'
import Card from './components/card'

function App() {
  const arr = [
    {
      name : "Vedansh",
      role : "Developer"
    },
    {
      name : "Drax",
      role : "Quality analyst"
    },
    {
      name : "Sujal",
      role : "Developer"
    },
    {
      name : "KANE",
      role : "Forward Deployed Engineer"
    }];
    const [num,setNum]=useState(0);
    const [title,setTitle]=useState('');
    function increase(){
      setNum(num+1);
    }
    function decrease(){
      if(num == 0) return num
      setNum(num-1);
    }
    function submitHandler(e){
      e.preventDefault()
      console.log('form submitted by',title);
      setTitle('');
    }
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      
      <div className="parent p-4 flex-grow">
        {arr.map((elem, index) => (
          <Card key={index} user={elem.name} pos={elem.role} />
        ))}
      </div>
      <div className="flex justify-center items-center gap-6 p-6 bg-black">
        <button 
          onClick={decrease}
          className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700 active:scale-95 transition"
        >
          -
        </button>
         <h4 className="text-3xl font-bold w-12 text-center text-white">{num}</h4>
        <button 
          onClick={increase}
          className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700 active:scale-95 transition"
        >
          +
        </button>
      </div>
      <div className=" flex w-100 h-200-20 bg-pink-700 align-center justify-center gap-6">
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}> 
        <input className=" gap-10 p-20 m-30px"type="text" placeholder='Enter you name' value ={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}/>
        <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App
