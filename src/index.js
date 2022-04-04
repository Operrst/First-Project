import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Pokemons from './components/Routes/pokemon'
import Team from './components/Routes/Team'
import Skills from './components/Routes/ability';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<App/>}/>
       <Route path="pokemons" element={<Pokemons/>}/>
       <Route path="/pokemons/:pokemonName" element={<Team/>} />
        <Route path=":teamId" element={<Team/>} />
        <Route path="/pokemons/:pokemonName/:pokemonAbility" element={<Skills/>} />
        <Route
      path ="*"
      element={
        <div style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </div>
      }
    />
     </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
