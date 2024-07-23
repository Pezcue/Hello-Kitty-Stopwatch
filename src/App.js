import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  
  useEffect(() => {
    let interval; 
    if (running) {
     interval = setInterval(() => {
       setTime((prevTime) => prevTime + 10);
     }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return ()=> clearInterval(interval)
   }, [running]);

  return (
    <div className='bg-orange-50 flex flex-col items-center justify-center min-h-screen border-8 border-black'>
    <h1 className='text-lg font-semibold'>Hello Kitty</h1>
    <h1 className='text-lg font-semibold'>Stopwatch</h1>
    <div className='bg-cover bg-[]text-xl font-semibold py-4 border-2 border-black'>
      <span>{("0" + Math.floor((time/60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time/1000) % 60)).slice(-2)}:</span>
      <span>{("0" + ((time/10) % 100)).slice(-2)}</span>
    </div>
    <div className='w-1/3 max-w-sm flex flex-row justify-evenly'>
      {running ? (
        <button 
        className='border rounded-lg py-1 px-2.5'
         onClick={()=>{setRunning(false)}}
         >
          Stop
        </button>
    ) : (
      <button
      className='bg-red-600 border rounded-lg py-1 px-3'
       onClick={()=>{setRunning(true)}}
       >
        Start
      </button>
    )
    }
      <button
      className='bg-red-600 border rounded-lg py-1 px-2'
       onClick={()=>{setTime(0) }
       }
       >
        Reset
      </button>
    </div>
    </div>
  );
}

export default App;
