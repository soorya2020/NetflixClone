import React from "react";
import './App.css';
import Banner from "./Components/Banner/Banner";
import  NavBar from "./Components/NavBar/NavBar";
import RowPost from "./Components/RowPost/RowPost";
import {action,comedy,originals,trending,HorrorMovie,RomanceMovies,Documentaries  } from "./urls";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/> 
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={trending} title='Trending' isSmall />
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={comedy} title='Comedy' isSmall />
      <RowPost url={HorrorMovie} title='Horror' isSmall />
      <RowPost url={RomanceMovies} title='Romance' isSmall />
      <RowPost url={Documentaries} title='Documentaries' isSmall />
    </div>
  );
}

export default App;
