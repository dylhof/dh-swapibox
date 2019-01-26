import React from 'react';
import { shallow } from 'enzyme';
import Buttons from './Buttons';

const makePeopleMock = jest.fn();
const makePlanetsMock = jest.fn();
const makeVehiclesMock = jest.fn();

describe('Buttons', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Buttons 
        makePeople={makePeopleMock}
        makePlanets={makePlanetsMock}
        Vehicles={makeVehiclesMock}
      /> 
    )
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should call the fetch people method when people is clicked', () => {
    wrapper.find('.people-btn').simulate('click');
    expect(makePeopleMock).toBeCalled();
  })

  it('should call the fetch planets method when planets is clicked', () => {
    wrapper.find('.planets-btn').simulate('click');
    expect(makePlanetsMock).toBeCalled();
  })

  it('should call the fetch vehicles method when vehicles is clicked', () => {
    wrapper.find('.vehicles-btn').simulate('click');
    expect(makeVehiclesMock).toBeCalled();
  })
})