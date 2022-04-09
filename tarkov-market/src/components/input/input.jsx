import { useState } from "react";
import ReactDOM from "react-dom";

function MyInput() {
  const [name, setName] = useState("");

  return (
    <form>
      <label>
        Search
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
  );
}
// input
