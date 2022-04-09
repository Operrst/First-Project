import { useState } from "react";
import ReactDOM from "react-dom";

function MyInput() {
  const [name, setName] = useState("");

  return (
    <from>
      <label>
        Search
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </from>
  );
}
