import React, { Component } from 'react';
import BusinessCard from './components/businessCard/businessCard'
import './App.css';
import Navigation from './components/navigation/navigation'
class App extends Component {
  render() {
    return (
      <div className="App">
      <Navigation />
      <BusinessCard />
      </div>
    );
  }
}

export default App;
