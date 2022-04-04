import { Navlink, Link, Outlet } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Pokemons() {
  const [pokemons, setPokemon] = useState([]);
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?offset=300&limit=100`)
      .then((res) => {
        console.log(res);
        setPokemon(res.data.results);
      });
  }, []);
  return (
    <div
      style={{
        borderRight: "solid 1px",
        padding: "1rem",
      }}
    >
      {pokemons.map((pokemon) => (
        <Link to={`/pokemons/${pokemon.name}`} key={pokemon.url}>
          <li>{pokemon.name}</li>
        </Link>
      ))}
    </div>
  );
}
export default Pokemons;
