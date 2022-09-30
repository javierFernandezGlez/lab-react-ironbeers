import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {Routes, Route, Link} from 'react-router-dom';
import Beers from './components/Beers';
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';
import AddBeer from './components/AddBeerForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/beers" element={<Beers/>}/>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/beer-details/:singleBeerId" element={<BeerDetails/>}></Route>
        <Route path="/random-beer" element={<RandomBeer/>}/>
        <Route path="/new-beer" element={<AddBeer/>}/>
      </Routes>
    </div>
  );
}

export default App;
