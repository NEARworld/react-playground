import { useState } from "react";
import './App.scss'

type AppProps = {
  count: number;
}

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <div className="App">
        <div>App</div>
        count: {count}
        <Child1 count={count} />
      </div>
      <button onClick={() => setCount((prev) => prev + 1)}>count</button>
    </div>
  );
}

function Child1({ count }: AppProps) {
  return <div className="child-1">
    <div>Child1</div>
    count: {count}
    <Child2 count={count} />
  </div>
}

function Child2({ count }: AppProps) {
  return <div className="child-2">
    <div>Child1</div>
    count: {count}
  </div>
}

export default App;
