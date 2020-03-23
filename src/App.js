import React from 'react';
import Header from './components/header/Header'
import Matches from "./components/pages/matches/Matches";
import Battles from "./components/pages/battles/Battles";
import {BrowserRouter, Route} from "react-router-dom";
//import logo from './logo.svg';
import './App.css';


class App extends React.Component{

  render() {
    return (
      <BrowserRouter>
      <section>
          <Header />
          <div className="main-container">
            <Route path='/Matches' render={() => <Matches />}></Route>
            <Route path='/Battles' render={() => <Battles />}/>
          </div>
      </section>
      </BrowserRouter>
    )
  }
}

export default App;
