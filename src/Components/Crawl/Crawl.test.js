import React from 'react';
import { shallow } from 'enzyme';
import Crawl from './Crawl';

const mockCrawl = 'It is a period of civil war.';

describe('Crawl', () => {
  it('should match the snapshot', () => {
    let wrapper = shallow(
      <Crawl crawl={mockCrawl} /> 
    )
    expect(wrapper).toMatchSnapshot();
  })
})