import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import * as api from '../../helpers/api';

describe('App', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<App/>)
  })
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('should set state as a film', async () => {
    const mockFilm = {opening_crawl: 'lalala', release_date: 'tday', title: 'star wars: a new hope'}
    const expectedFilm = {crawl: 'lalala', date: 'tday', title: 'star wars: a new hope'}
    api.fetchData = jest.fn(() => mockFilm)
    expect(wrapper.state('film')).toEqual({})
    await wrapper.instance().getFilm()
    expect(wrapper.state('film')).toEqual(expectedFilm)
  })

})
