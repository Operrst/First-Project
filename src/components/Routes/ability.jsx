import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function Skills() {
  let { pokemonName, pokemonAbility } = useParams;
  const [abilities, setAbility] = useState([]);
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/${pokemonAbility}`)
      .then((res) => {
        console.log(res);
        setAbility(res.data.abilities.ability);
      });
  }, []);
  return <div></div>;
}
