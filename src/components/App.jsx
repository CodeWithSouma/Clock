import React,{useState}from "react";

function App() {

  const now = new Date().toLocaleTimeString();
  // N:B you have to use hocks 
  // destructure array
  const [currentTime, setTime] = useState(now);
  function updateTime(){
    setTime(new Date().toLocaleTimeString());
  }

  //store current state and update sate some time afer react autometically update change ui
const [currentMessage,setMessage] = useState(getMessage(new Date().getHours()));

function getMessage(curHr) {
  if (curHr < 12) {
    return 'good morning';
  } else if (curHr < 18) {
    return 'good afternoon';
  } else if (curHr < 21) {
    return 'good evening';
  } else {
    return 'good night';
  }
}

function updateMessage() {
  setMessage(getMessage(new Date().getHours()));
}


  // update time every 1 second
  setInterval(updateTime,1000);
  //every 1 minute refresh message 
  setInterval(updateMessage,60000);
  

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <h2>{currentMessage}!</h2>
    </div>
  );
}

export default App;
