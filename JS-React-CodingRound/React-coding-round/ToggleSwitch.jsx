import React, { useState } from "react";

function App() {
  const [isOn, setIsOn] = useState(false);
  return (
    <div className="container m-4 text-center">
      <h1>React</h1>
      <button
        onClick={() => setIsOn(!isOn)}
        style={{ backgroundColor: isOn ? "red" : "green", color: "white" }}
      >
        {isOn ? "Off" : "On"}
      </button>
    </div>
  );
}

export default App;
