import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setItem(e.target.value);
  };
  const handleClick = () => {
    item === "" ? alert("Please enter something...") : setList([...list, item]);
    setItem("");
  };

  return (
    <>
      <h1>Todo List</h1>
      <input
        type="text"
        value={item}
        placeholder="Enter Text Here"
        onChange={handleChange}
      />
      <button onClick={handleClick}>ADD</button>
      <ol>
        {list.map((val, idx) => {
          return <li key={idx}>{val}</li>;
        })}
      </ol>
    </>
  );
}
