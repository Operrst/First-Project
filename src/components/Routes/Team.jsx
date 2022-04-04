import { render } from "@testing-library/react";
import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Team() {
  let { pokemonName } = useParams();
  console.log({ pokemonName });
  const [lists, setList] = useState([]);
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((res) => {
        console.log(res);
        setList(res.data.abilities);
      });
  }, []);
  return (
    <div>
      {lists.map((list) => (
        <li key={list.url}>{list.ability.name}</li>
      ))}
    </div>
    // <div>"test"</div>
    // <div>"test branch</div>
    // Test commit  in first branch
    // test commit
  );
}
