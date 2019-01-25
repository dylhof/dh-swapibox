import React, { Component } from 'react';
import '../../main.scss';
import Crawl from '../Crawl/Crawl.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      film: {},
      currentView: '',
      people: [],
      planets: [],
      vehicles: []
    }
  }

  componentDidMount = () => {
    const episode = Math.ceil(Math.random() * 7)
    const url = `https://swapi.co/api/films/${episode}`;
    fetch(url)
      .then(response => response.json())
      .then(film => this.setState({ film: { crawl: film.opening_crawl, title: film.title, date: film.release_date }}))
  }

  fetchData = async (url) => {
    let response = await fetch(url)
    let data = await response.json()
    return data
  }
  
  makePeople = async () => {
    const url = 'https://swapi.co/api/'
    const peopleDataObject = await this.fetchData(url + 'people')
    const peopleData = peopleDataObject.results
    const people = await Promise.all(peopleData.map(async (person) => {
      const homeworld = await this.fetchData(person.homeworld)
      const species = await this.fetchData(...person.species)
      const personData = { name: person.name, homeworld: homeworld.name, species: species.name, population: homeworld.population, category: 'person'}
      return personData
    }))
   await this.setState({ people, currentView: 'people' })
  }

  render() {
    const { currentView, film } = this.state;
    let currentBody;

    if(currentView) {
      currentBody = 
      <CardContainer cards={this.state[currentView]}
      />
    } else {
      currentBody =
      <Crawl {...film} />
    };

    return (
      <div className='App'>
        {currentBody}
        <Buttons 
          makePeople={this.makePeople}
          fetchData={this.fetchData}
        />

      </div>
    );
  }
}

export default App;
