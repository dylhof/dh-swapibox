import * as api from '../helpers/api';
import App from '../Components/App/App';

export const peopleMap = async (peopleData) => {
  try {const people = await Promise.all(peopleData.map(async (person) => {
      const homeworld = await personHomeworldFetch(person)
      const species = await personSpeciesFetch(person);
      return {
        name: person.name,
        homeworld: homeworld.name,
        species: species.name,
        population: homeworld.population,
        category: 'person',
        id: person.created
      }
    }))
    return people
  } catch(error) {
    App.setState({ errorMessage: error })
  }
}

const personHomeworldFetch = async (person) => {
  try {const homeworld = await api.fetchData(person.homeworld);
  return homeworld;
  } catch(error) {
    App.setState({ errorMessage: error })
  }
}

const personSpeciesFetch = async (person) => {
  try {const species = await api.fetchData(...person.species);
  return species;
  } catch(error) {
    App.setState({ errorMessage: error })
  }
}

export const planetMap = async (planetsData) => {
  try {const planets = await Promise.all(planetsData.map(async (planet) => {
      const residents = await planetResidentMap(planet);
      return {
        name: planet.name, 
        terrain: planet.terrain, 
        population: planet.population, 
        climate: planet.climate, 
        residents: residents, 
        category: 'planet',
        id: planet.created
      }
    }))
    return planets
  } catch(error) {
    App.setState({ errorMessage: error})
  }
}

const planetResidentMap = async (planet) => {
  try{ const residents = await Promise.all(planet.residents.map(async (residentURL) => {
      const residentData = await api.fetchData(residentURL);
      const resident = residentData.name
      return resident
    }))
    return residents
  } catch(error) {
    App.setState({ errorMessage: error })
  }
}

export const vehiclesMap = (vehiclesData) => {
  const vehicles = vehiclesData.map((vehicle) => {
    return { 
      name: vehicle.name, 
      model: vehicle.model, 
      class: vehicle.class, 
      passengers: vehicle.passengers, 
      category: 'vehicle',
      id: vehicle.created
    }
  })
  return vehicles
}