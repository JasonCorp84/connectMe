import React, { Component } from 'react';
import BusinessCard from './components/businessCard/businessCard'
import './App.css';
import Navigation from './components/navigation/navigation'
import ApiHandler from './components/apiHandler/apiHandler'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navigation />
      <BusinessCard />
      <ApiHandler />
      </div>
    );
  }
}

export default App;
