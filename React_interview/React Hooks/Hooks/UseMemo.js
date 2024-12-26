import React, { useMemo, useState } from "react";

function App() {
  const [apple, setApple] = useState(0);
  const [banana, setBanana] = useState(0);

  const dummy = () => {
    console.log("dummy function");
    for (let i = 0; i < 24000000000; i++) {
      return "Hello world";
    }
  };

  //const data = dummy()// without useMemo

  const data = useMemo(() => {
    //with useMemo
    return dummy();
  }, [banana]);

  return (
    <div className="container m-4 text-center">
      <h2 id="try">{data}</h2>
      <button onClick={() => setApple(apple + 1)}>Apple {apple}</button>
      <button onClick={() => setBanana(banana + 1)}>Banana {banana}</button>
    </div>
  );
}

export default App;
