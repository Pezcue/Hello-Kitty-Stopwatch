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
    <div style={{
      backgroundImage: "url('./images/town.png')",
      backgroundPosition: 'center',
      backgroundSize: '80%',
      backgroundRepeat: 'no-repeat',
    }}
     className="bg-orange-50 flex flex-col items-center justify-center min-h-screen border-8 border-black">
    <h1 className='text-7xl font-semibold'>The Hello Kitty</h1>
    <h1 className='text-red-700 text-5xl font-semibold m-6'>Stopwatch</h1>
    <div style={{
          backgroundImage: "url('./images/hellokitty.png')",
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
  
          width: '45%',// Adjust the height to your needs
          height: '450px',    // Adjust the width to your needs
        }}
        className="text-5xl flex items-center justify-center text-xl font-semibold py-4">
      <span>{("0" + Math.floor((time/60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time/1000) % 60)).slice(-2)}:</span>
      <span>{("0" + ((time/10) % 100)).slice(-2)}</span>
    </div>
    <div className='text-base w-1/3 max-w-sm flex flex-row justify-evenly'>
      {running ? (
        <button 
        className='bg-blue-600 text-white border rounded-lg py-1 px-4'
         onClick={()=>{setRunning(false)}}
         >
          Stop
        </button>
    ) : (
      <button
      className='bg-red-600 text-white border rounded-lg py-1 px-4'
       onClick={()=>{setRunning(true)}}
       >
        Start
      </button>
    )
    }
      <button
      className='bg-red-600 text-white border rounded-lg py-1 px-4 '
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
