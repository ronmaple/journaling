import "./styles.css";
import { useRef } from "react";

export default function App() {
  const ref = useRef();

  const focus = () => {
    if (ref.current) {
      ref.current.focus();
      console.log(ref.current);
    }
  };

  return (
    <div className="App">
      <input ref={ref} value="hello" />
      <button onClick={focus}>focus</button>
    </div>
  );
}
