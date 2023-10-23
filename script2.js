const getPeople = fetch => {
    return fetch('https://swapi.py4e.com/api/people')
    .then(response => response.json())
    .then(people => {
        return {
            count: people.count,
            results: people.results
        }
    })
}

const getPeopleAsync = async (fetch) => {
    const getReq = await fetch('https://swapi.py4e.com/api/people');
    const people = await getReq.json();
    return {
        count: people.count,
        results: people.results
    }
}

module.exports = {
    getPeople,
    getPeopleAsync
}
