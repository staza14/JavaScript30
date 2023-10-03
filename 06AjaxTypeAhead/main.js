// url of endpoint
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
// empty array for everything in the json above wich we will search through to get results
const cities = [];
// fetching from endpoint
fetch(endpoint)
  // parsing json
  .then(blob => blob.json())
  // pushing the data into the cities array we use... to spread it into individual elements
  .then(data => cities.push(...data))

function findMatches(wordsToMatch, cities){
    return cities.filter(place =>{
      // check if city or state matches what is searched
      const regexp = new RegExp(wordsToMatch, 'gi');
      return place.city.match(regexp) || place.state.match(regexp);
    });
}

function displayMatches(){
  const matchArray = findMatches(this.value, cities);
  console.log(matchArray);
  const html = matchArray.map(place => {
    const regexp = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regexp, `<span class="hl">${this.value}</span>`)
    const stateName = place.state.replace(regexp, `<span class="hl">${this.value}</span>`)
    return `
    <li>
    <span class="name">${cityName}, ${stateName} </span>
    <span class="population">${place.population}</span>
    </li>
    `
  }).join("");
  suggestions.innerHTML = html;
}
// selecting search input
const searchInput = document.querySelector('.search');
// sulecting ul of suggestions
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
