import './App.css';
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function App() {
   return (
    <div className="App">
       <h1>Bookkeeper!</h1>
       <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/pokemons">Pokemons</Link>
        
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;
