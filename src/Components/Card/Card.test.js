import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  let wrapper;
  let cardDataMock
  beforeEach(() => {
    wrapper = shallow(<Card card={cardDataMock}/>)
  })
  it('should match the snapshot if category is person', () => {
    //setup
    cardDataMock = {name: 'luke', homeworld: 'tatoine', species: 'human', population: 20, category: 'person', id: 1}
    //execution && expectation
    expect(wrapper).toMatchSnapshot();
  })

  it('should match the snapshot if category is planet', () => {
    //setup
    cardDataMock = {name: 'tatoine', terrain: 'desert', climate: 'hot', residents: ['luke', 'Beru'], category: 'planet', id: 1}
    //execution && expectation
    expect(wrapper).toMatchSnapshot();
  })

  it('should match the snapshot if category is vehicle', () => {
    //setup
    cardDataMock = {name: 'At-At', model: '5', class: 'red', passengers: 30, category: 'vehicle', id: 1}
    //execution && expcetation 
    expect(wrapper).toMatchSnapshot();
  })
})