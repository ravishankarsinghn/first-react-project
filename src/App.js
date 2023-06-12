import { useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  useState(() => getAdvice(), []);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  return (
    <div>
      <h1>{advice || "Hello World!"}</h1>
      <Message count={count} />
      <button onClick={getAdvice}>Get Quotes</button>
    </div>
  );
}

function Message(props) {
  return (
    <p>
      You have read <strong>{props.count}</strong> pieces of advice.
    </p>
  );
}
