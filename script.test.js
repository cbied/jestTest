const googleSearch = require('./script');
dbMock = [
    'dogs.com',
    'food.com',
    'travel.com',
    'tea.com',
    'cats.com',
    'bestdogsever.com',
    'mydogPiper.com',
    'dogsarethebest.com'
]

describe('googleSearch', () => {
    it('should return match results of no greater than 3 matches', () => {
        // 4 results in db but should only return 3 matches in an array
        expect(googleSearch('dog', dbMock))
        .toEqual(['dogs.com', 'bestdogsever.com', 'mydogPiper.com'])
    })
    
    it('should return an empty array', () => {
        expect(googleSearch('corn', dbMock))
        .toEqual([])
    })
    
    it('should return one match in array', () => {
        expect(googleSearch('tea', dbMock))
        .toEqual(['tea.com'])
    })
})
