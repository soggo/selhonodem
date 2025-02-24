import { useState } from "react";

function Clock() {
  const [counter, setCounter] = useState(0);

  setInterval(() => {
    setCounter(count => count + 1)
  }, 1000);

  return (
    <p style={{ color: 'black' }}>{counter} seconds have passed.</p>
  );
}

export default Clock;