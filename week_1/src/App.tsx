import React, { useEffect, useRef, useState } from "react";
import "./App.scss";

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
  const prevCount = useRef(count);
  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <div className="child-1">
      <div>Child1</div>
      count: {prevCount.current}
      <Child2 count={count} />
    </div>
  );
}
class Child2 extends React.Component<CountProps, CountState> {
  constructor(props: CountProps) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  shouldComponentUpdate(nextProps: Readonly<CountProps>, nextState: Readonly<CountState>, nextContext: any): boolean {
    if (nextProps.count <= 2) return true;
    else return false;
  }

  render() {
    return (
      <div className="child-2">
        <div>Child2</div>
        count: {this.props.count}
      </div>
    );
  }
}

export default App;
