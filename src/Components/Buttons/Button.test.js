import React from 'react';
import { shallow } from 'enzyme';
import Buttons from './Buttons';

const fetchPeopleMock = jest.fn();
const fetchPlanetsMock = jest.fn();
const fetchVehiclesMock = jest.fn();

describe('Buttons', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Buttons 
        fetchPeople={fetchPeopleMock}
        fetchPlanets={fetchPlanetsMock}
        fetchVehicles={fetchVehiclesMock}
      /> 
    )
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should call the fetch people method when people is clicked', () => {
    wrapper.find('.people-btn').simulate('click');
    expect(fetchPeopleMock).toBeCalled();
  })

  it('should call the fetch planets method when planets is clicked', () => {
    wrapper.find('.planets-btn').simulate('click');
    expect(fetchPlanetsMock).toBeCalled();
  })

  it('should call the fetch vehicles method when vehicles is clicked', () => {
    wrapper.find('.vehicles-btn').simulate('click');
    expect(fetchVehiclesMock).toBeCalled();
  })
})