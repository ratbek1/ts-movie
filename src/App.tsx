import React from 'react';
import './App.scss';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import MovieDetails from "./pages/MovieDetails";
import SearchMovie from "./pages/SearchMovie";
import ActorsDetail from "./pages/ActorsDetail";

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
            <Route path={"/"} element={ <Home/> }/>
            <Route path={"/popular"} element={ <Popular/> }/>
            <Route path={"/topRated"} element={ <TopRated/> }/>
            <Route path={"/movieDetails/:MovieId"} element={ <MovieDetails/> }/>
            <Route path={"/search/search_movie/:MovieName"} element={ <SearchMovie/> }/>
            <Route path={"/person/person_movie/:personId"} element={ <ActorsDetail/> }/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
