import { render } from "@testing-library/react";
import React, { useState } from "react";
import "./NavLink.css";
import "./info.css";

function HomePage() {
  return (
    <div className="HomePage">
      <Info name="Trening" />
      <NavLink />
    </div>
  );
}

function NavLink() {
  const [pokemony, setpokemony] = useState([
    "Squirtle",
    "Bulbasaur",
    "Charmander",
  ]);

  return <div className="backGround">{pokemony.map((nazwa) => nazwa)} </div>;
}

function Info(props) {
  return (
    <div className="color">
      <h1>{props.name}</h1>
    </div>
  );
}

export default HomePage;
