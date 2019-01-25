import React, { Component } from 'react';
import '../../main.scss';
import Crawl from '../Crawl/Crawl';
import CardContainer from '../CardContainer/CardContainer';
import Buttons from '../Buttons/Buttons';
// import * as api from '../../utils/api';

// then call functions from that as api.functionName

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

  componentDidMount = async () => {
    const episode = Math.ceil(Math.random() * 7)
    const url = `https://swapi.co/api/films/${episode}`;
    const response = await fetch(url)
    const film = await response.json();
    await this.setState({ film: { crawl: film.opening_crawl, title: film.title, date: film.release_date }})
  }

  fetchData = async (url) => {
    const response = await fetch(url)
    if (response.ok) {
      return response.json()
    } else {
      throw Error(`Error fetching, code: ${response.status}`)
    }
  }

  makePeople = async () => {
    const peopleDataObject = await this.fetchData('https://swapi.co/api/people')
    const peopleData = peopleDataObject.results
    const people = await Promise.all(peopleData.map(async (person) => {
      const homeworld = await this.fetchData(person.homeworld)
      const species = await this.fetchData(...person.species)
      const personData = { name: person.name, homeworld: homeworld.name, species: species.name, population: homeworld.population, category: 'person'}
      return personData;
    }))
   await this.setState({ people, currentView: 'people' });
  }

  makePlanets = async () => {
    const planetsDataObject = await this.fetchData('https://swapi.co/api/planets')
    const planetsData = planetsDataObject.results
    const planets = await Promise.all(planetsData.map(async (planet) => {
      const residents = await Promise.all(planet.residents.map(async (residentURL) => {
        const residentData = await this.fetchData(residentURL);
        const resident = residentData.name
        return resident
      }))
      const planetData = { name: planet.name, terrain: planet.terrain, population: planet.population, climate: planet.climate, residents: residents, category: 'planet'}
      return planetData;
    }))
    await this.setState({ planets, currentView: 'planets'})
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
          makePlanets={this.makePlanets}
          fetchData={this.fetchData}
        />
      </div>
    );
  }
}

export default App;
