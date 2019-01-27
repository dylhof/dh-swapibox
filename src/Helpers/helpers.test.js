import React from 'react'
import * as helpers from './helpers'
import * as api from './api';



describe('personHomeworldFetch', () => {
  const mockPerson = {
    homeworld: 'homeworldURL',
    species: 'speciesURL'
  }
  const expected = {
    name: 'tatoine',
    population: '20000'
  }
  
  it('should fetch homeworld data', async () => {
    //setup
    api.fetchData = jest.fn(() => expected)
    //execution
    const withHomeworld = await helpers.personHomeworldFetch(mockPerson)
    //expectation
    expect(withHomeworld).toEqual(expected)
  })
  
  it('should call fetch data with the correct params', () => {
    //setup
    api.fetchData = jest.fn(() => expected)
    //execution
    helpers.personHomeworldFetch(mockPerson);
    //expectation
    expect(api.fetchData).toHaveBeenCalledWith('homeworldURL')
  })
})

describe('peopleMap', () => {
  const mockPeople = [{ name: 'luke', homeworld: 'mockHomeworldUrl1', species: ['mockSpeciesURL1'] }, { name: 'leia', homeworld: 'mockHomeworldUrl2', species: ['mockSpeciesURL2'] }]
  const mockHomeworld1 = { name: 'tatooine', population: '200' }
  const mockHomeworld2 = { name: 'alderan', population: '300' }

  it.skip('should call personHomeworldFetch with the correct params', async () => {
    //setup
    let correctNumber = mockPeople.length
    // helpers.personHomeworldFetch =  jest.fn()
    //execution
    await helpers.peopleMap(mockPeople)
    //expectation
    expect(helpers.personHomeworldFetch).toHaveBeenCalledTimes(correctNumber)
  })



})