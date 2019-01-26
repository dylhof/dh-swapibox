import React from 'react';
import { fetchData } from './api';

describe('fetchData', () => {
  let mockReturnData;

  beforeEach(() => {
    mockReturnData = {name: 'Leia Organa'}
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        person: mockReturnData
      })
    }))
  })

  it('calls fetch with the correct data', () => {

  })

  it('throws an error when the fetch fails', () => {

  })
})