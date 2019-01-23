import React, { Component } from 'react';
import '../../main.scss';
import Crawl from '../Crawl/Crawl.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      crawl: ''
    }
  }

  componentDidMount = () => {
    const episode = Math.ceil(Math.random() * 7)
    const url = `https://swapi.co/api/films/${episode}`;
    fetch(url)
      .then(response => response.json())
      .then(film => this.setState({ crawl: film.opening_crawl }))
  }

  render() {
    const { crawl } = this.state;
    return (
      <div className='App'>
        <Crawl crawl={crawl} />
      </div>
    );
  }
}

export default App;
