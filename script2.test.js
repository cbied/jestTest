const swapi = require('./script2')

it('calls swapi API to get people', (done) => {
    expect.assertions(1)
    swapi.getPeople(fetch).then(people => {
        expect(people.count).toEqual(87)
        done();
    })
})

it('calls swapi API to get people async', () => {
    expect.assertions(2)
    return swapi.getPeopleAsync(fetch).then(people => {
        expect(people.count).toEqual(87)
        expect(people.results.length).toBeGreaterThan(9)
        
    })
})

it('getPeople return count and results', () => {
    const mockFetch = jest.fn().mockReturnValue(Promise.resolve({
        json: () => Promise.resolve({
            count: 87,
            results: [0,1,2,3,4,5]
        })
    }))
    expect.assertions(4)
    return swapi.getPeopleAsync(mockFetch).then(people => {
        expect(mockFetch.mock.calls.length).toBe(1)
        expect(mockFetch).toBeCalledWith('https://swapi.py4e.com/api/people')
        expect(people.count).toBe(87)
        expect(people.results.length).toBeGreaterThan(5)
    })
})