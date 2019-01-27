import React from 'react';
import { fetchData } from './api';
import { promised } from 'q';

describe('fetchData', () => {
  let mockReturnData;
  let mockURL

  beforeEach(() => {
    mockReturnData = [{}, {}, {}];
    mockURL = 'https://swapi.co/api/'
    window.fetch = jest.fn()
  })

  it('calls fetch with the correct data', () => {
    //execution
    fetchData(mockURL)
    //expectation
    expect(window.fetch).toHaveBeenCalledWith(mockURL)
  })

  it('returns the expected data', async () => {
    //setup
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(mockReturnData),
        ok: true
      }))
    //execution
    const results = await fetchData(mockURL)
    //expectation
    expect(results).toEqual(mockReturnData)

  })

  it('throws an error when the fetch fails', async () => {
    //setup
    const expectedError = Error('Error fetching, code: 404')
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve ({
      status: 404,
      ok: false
    }))
    //execution && expectation 
    await expect(fetchData(mockURL)).rejects.toEqual(expectedError)
  })
})