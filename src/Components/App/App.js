import React, { Component } from 'react';
import '../../main.scss';
import Crawl from '../Crawl/Crawl';
import CardContainer from '../CardContainer/CardContainer';
import Buttons from '../Buttons/Buttons';

class App extends Component {
  constructor() {
    super();
    this.state = {
      crawl: ''
    }
  }

  componentDidMount = () => {
    const episode = Math.ceil(Math.random() * 7)
    const url = `https://swapi.co/api/films/${episode}`;
    fetch(url)
      .then(response => response.json())
      .then(film => this.setState({ crawl: film.opening_crawl }))
  }

  fetchPeople = () => {
    const url = 'https://swapi.co/api/people'
  }

  fetchVehicles = () => {

  }

  fetchPlanets = () => {

  }

  render() {
    const { crawl } = this.state;
    return (
      <div className='App'>
        <Crawl crawl={crawl} />
        <CardContainer />
        <Buttons 
          fetchPeople={this.fetchPeople}
          fetchPlanets={this.fetchPlanets}
          fetchVehicles={this.fetchVehicles}
        />
      </div>
    );
  }
}

export default App;
