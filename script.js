//fetch the api once and put it into an empty array

function fetchData() {
  fetch('https://api.genshin.dev/')
    .then(response => response.json())
    .then(result => {
      dataSet.push(...result);
    })
}

let fs = require('fs').promises

let url = 'https://api.genshin.dev/'

let parseResponse = response => response.json()
//let logJson = json => console.log(JSON.stringify(json))
let writeJsonToFile = json => fs.writeFile('./countries.json', JSON.stringify(json))
let handleError = error => console.error(error)

fetch(url)
  .then(parseResponse)
  //.then(logJson)
  .then(writeJsonToFile)
  .catch(handleError)