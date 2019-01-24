import React from 'react';
import { shallow } from 'enzyme';
import Buttons from './Buttons';

const fetchPeopleMock = jest.fn();

describe('Buttons', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Buttons fetchPeople={fetchPeopleMock}/> 
    )
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should call the fetch people method when people is clicked', () => {
    wrapper.find('.people-btn').simulate('click');
    expect(fetchPeopleMock).toBeCalled();
  })
})