import React,{useState}from "react";

function App() {

  const now = new Date().toLocaleTimeString();
  // N:B you have to use hocks 
  // destructure array
  const [currentTime, setTime] = useState(now);
  function updateTime(){
    setTime(new Date().toLocaleTimeString());
  }

  // 
  setInterval(updateTime,1000);

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
