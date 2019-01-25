import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  describe('componentDidMount', () => {
    let mockEpisode;
    let mockUrl;
    let wrapper;
    let mockFilm;

    beforeEach(() => {
      mockEpisode = 1;
      mockUrl = `https://swapi.co/api/films/${mockEpisode}`;
      mockFilm = { opening_crawl: 'It was a dark time for the rebellion.'};
      wrapper = shallow(
        <App /> 
      );
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: Promise.resolve(mockFilm),
        ok: true,
      }));
    })

    it('call fetch with the correct parameters', () => {
      //setup
      //execution
      wrapper.instance().componentDidMount()
      //expectation
      expect(window.fetch).toHaveBeenCalledWith(mockUrl)
    })

    it('should set state as the opening crawl', () => {
      //setup
      const expectedState = 'It was a dark time for the rebellion.'
      expect(wrapper.state('crawl')).toEqual('');
      //execution
      wrapper.instance().componentDidMount()
        .then(() => {
          //expectation
            expect(wrapper.state('crawl')).toEqual(expectedState)
        }) 
    })

  })

})
