import React, { useState } from "react";
import './App.scss'

interface CountProps {
  count: number;
}
interface CountState {
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

function Child1({ count }: CountProps) {
  return <div className="child-1">
    <div>Child1</div>
    count: {count}
    <Child2 count={count} />
  </div>
}
class Child2 extends React.Component<CountProps, CountState>{
  constructor(props: CountProps) {
    super(props);
    this.state = {
      count: 0
    }
  }

  render() {
    return <div className="child-2">
      <div>Child2</div>
      count: {this.props.count}
    </div>
  }
}

export default App;
