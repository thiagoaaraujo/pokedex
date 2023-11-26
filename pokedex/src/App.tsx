import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import InputPage from './components/Input/input';
import PokemonListPage from './components/PokemonListPage/PokemonListPage';

function App() {
  return (
    <Router>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<InputPage />}/>
          <Route path="/pokemon-list" element={<PokemonListPage />}/>
        </Routes>
      </>
    </Router>
  );
}
export default App;


