import * as api from '../helpers/api';

export const peopleMap = async (peopleData) => {
  const people = await Promise.all(peopleData.map(async (person) => {
    const homeworld = await personHomeworldFetch(person)
    const species = await personSpeciesFetch(person);
    return {
      name: person.name,
      homeworld: homeworld.name,
      species: species.name,
      population: homeworld.population,
      category: 'person'
    }
  }))
  return people
}

const personHomeworldFetch = async (person) => {
  const homeworld = await api.fetchData(person.homeworld);
  return homeworld;
}

const personSpeciesFetch = async (person) => {
  const species = await api.fetchData(...person.species);
  return species;
}

export const planetMap = async (planetsData) => {
  const planets = await Promise.all(planetsData.map(async (planet) => {
    const residents = await this.planetResidentMap(planet);
    return {
      name: planet.name, 
      terrain: planet.terrain, 
      population: planet.population, 
      climate: planet.climate, 
      residents: residents, 
      category: 'planet'
    }
  }))
  return planets
}
