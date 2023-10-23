const googleDatabase = [
    'dogs.com',
    'food.com',
    'travel.com',
    'tea.com',
    'cats.com',
    'bestdogsever.com',
    'mydogPiper.com',
    'dogsarethebest.com'
]

const googleSearch = (searchInput, db) => {
    const match = db.filter(website => {
        return website.includes(searchInput)
    })
    return match.length > 3 ? match.slice(0, 3) : match
}

module.exports = googleSearch;