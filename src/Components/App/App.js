import React, { Component } from 'react';
import '../../main.scss';
import Crawl from '../Crawl/Crawl';
import CardContainer from '../CardContainer/CardContainer';
import Buttons from '../Buttons/Buttons';
import * as api from '../../helpers/api';
import * as help from '../../helpers/helpers';
  
class App extends Component {
  constructor() {
    super();
    this.state = {
      film: {},
      currentView: '',
      people: [],
      planets: [],
      vehicles: [],
      errorMessage: ''
    }
  }

  componentDidMount = () => {
    this.getFilm()
  }
  
  getFilm = async () => {
    const episode = Math.ceil(Math.random() * 7)
    const url = `https://swapi.co/api/films/${episode}`;
    try {const film = await api.fetchData(url)
      await this.setState({ 
        film: { 
          crawl: film.opening_crawl, 
          title: film.title, 
          date: film.release_date }
      })}
    catch(error) {
      this.setState({ errorMessage: error })
    }
  }

  makePeople = async () => {
    if (!this.state.people.length) {
      try {const peopleDataObject = await api.fetchData('https://swapi.co/api/people')
        const peopleData = peopleDataObject.results
        const people = await help.peopleMap(peopleData);
        await this.setState({ people, currentView: 'people' });
      } catch(error) {
        this.setState({ errorMessage: error })
      }
    } else {
      this.setState({ currentView: 'people' })
    }
  }

  makePlanets = async () => {
    if(!this.state.planets.length) {
      try {const planetsDataObject = await api.fetchData('https://swapi.co/api/planets')
        const planetsData = planetsDataObject.results
        const planets = await help.planetMap(planetsData)
        await this.setState({ planets, currentView: 'planets'})
      } catch(error) {
        this.setState({ errorMessage: error })
      }
    } else {
      this.setState({ currentView: 'planets' })
    }
  }
  
  makeVehicles = async () => {
    if(!this.state.vehicles.length) {
      try {const vehiclesDataObject = await api.fetchData('https://swapi.co/api/vehicles')
        const vehiclesData = vehiclesDataObject.results
        const vehicles = help.vehiclesMap(vehiclesData)
        await this.setState({ vehicles, currentView: 'vehicles'})
      } catch(error) {
        this.setState({ errorMessage: error })
      }
    } else {
      this.setState({ currentView: 'vehicles' })
    }
  }

  render() {
    const { currentView, film, errorMessage } = this.state;
    let currentBody;

    if(errorMessage) {
      currentBody = <p>{errorMessage}</p>
    } else if(currentView) {
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
