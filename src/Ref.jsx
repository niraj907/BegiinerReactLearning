import { useRef, useState } from "react";

export default function Ref() {
  const [val, setVal] = useState("");
  const refElem = useRef(null); // ref initialized with null for the input element
  const countRef = useRef(0); // ref to keep track of the count

  // Function to handle input change
  function change(e) {
    setVal(e.target.value);
    countRef.current += 1; // increment the count
  }

  // Function to clear input value and focus on the input field
  function submit() {
    setVal(""); // Clear the input value
    if (refElem.current) {
      refElem.current.focus(); // Focus on the input field if ref is attached
    }
  }

  // Function to change the color of the input field
  function handleColor() {
    if (refElem.current) {
      refElem.current.style.color = "red"; // Set input text color to red
    }
  }

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1 style={{ margin: "1.2rem 0rem" }}>useRef Hook</h1>
      <input
        style={{ fontSize: "1.2rem", padding: "0.3rem 0.8rem" }}
        value={val}
        ref={refElem} // ref attached to the input element
        type="text"
        onChange={change}
      />
      <button onClick={submit}>Submit</button>
      <button onClick={handleColor}>HandleColor</button>
      <h1>Input Value: {val}</h1>
      <h4>Total Count: {countRef.current}</h4> {/* Display the count */}
    </div>
  );
}
