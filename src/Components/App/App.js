import React, { Component } from 'react';
import '../../main.scss';
import Crawl from '../Crawl/Crawl';
import CardContainer from '../CardContainer/CardContainer';
import Buttons from '../Buttons/Buttons';
import * as api from '../../Helpers/api'

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
    this.getFilm()
  }
  
  getFilm = async () => {
    const episode = Math.ceil(Math.random() * 7)
    const url = `https://swapi.co/api/films/${episode}`;
    const film = await api.fetchData(url)
    await this.setState({ 
      film: { 
        crawl: film.opening_crawl, 
        title: film.title, 
        date: film.release_date }
    })
  }

  makePeople = async () => {
    const peopleDataObject = await api.fetchData('https://swapi.co/api/people')
    const peopleData = peopleDataObject.results
    const people = await Promise.all(peopleData.map(async (person) => {
      const homeworld = await api.fetchData(person.homeworld)
      const species = await api.fetchData(...person.species)
      const personData = { name: person.name, homeworld: homeworld.name, species: species.name, population: homeworld.population, category: 'person'}
      return personData;
    }))
   await this.setState({ people, currentView: 'people' });
  }

  makePlanets = async () => {
    const planetsDataObject = await api.fetchData('https://swapi.co/api/planets')
    const planetsData = planetsDataObject.results
    const planets = await Promise.all(planetsData.map(async (planet) => {
      const residents = await Promise.all(planet.residents.map(async (residentURL) => {
        const residentData = await api.fetchData(residentURL);
        const resident = residentData.name
        return resident
      }))
      const planetData = { name: planet.name, terrain: planet.terrain, population: planet.population, climate: planet.climate, residents: residents, category: 'planet'}
      return planetData;
    }))
    await this.setState({ planets, currentView: 'planets'})
  }
  
  makeVehicles = async () => {
    const vehiclesDataObject = await api.fetchData('https://swapi.co/api/vehicles')
    const vehiclesData = vehiclesDataObject.results
    console.log(vehiclesData)
    const vehicles = vehiclesData.map((vehicle) => {
      return { name: vehicle.name, model: vehicle.model, class: vehicle.class, passengers: vehicle.passengers, category: 'vehicle'}
    })
    await this.setState({ vehicles, currentView: 'vehicles'})
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
          makeVehicles={this.makeVehicles}
        />
      </div>
    );
  }
}

export default App;
