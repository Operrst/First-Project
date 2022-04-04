import React, { useState } from "react";

function Propsy() {
  return (
    <div className="Propsy">
      <Dzieci imie="Jakis string" />
      <Stringjeden />
    </div>
  );
}
function Dzieci(props) {
  return (
    <div>
      <h1>{props.imie}</h1>
    </div>
  );
}

function Stringjeden() {
  const [stringi, setStringi] = useState(["ktoś", " coś", " jak?"]);
  return <div>{stringi.map((nazewnictwo) => nazewnictwo)}</div>;
}
export default Propsy;
