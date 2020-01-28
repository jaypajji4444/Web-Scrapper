
const btn = document.querySelector('#btn1');
const searchInput = document.querySelector('input');
const resultsList = document.querySelector('#results')
console.log("hi")
const BASE_URL = 'http://localhost:3005/';

btn.addEventListener('click', formSubmitted);

function formSubmitted(event) {
  console.log("hi")
    event.preventDefault();

    const searchTerm = searchInput.value;
    getSearchResults(searchTerm)
        .then(showResults);
}

function getSearchResults(searchTerm) {
    return fetch(`${BASE_URL}search/${searchTerm}`)
        .then(res => res.json());
}

function showResults(results) {
    console.log(results);
    results.forEach(movie => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        li.appendChild(img);
        img.src = movie.image;
        const a = document.createElement('a');
        a.textContent = movie.title;
        a.href = '/movie.html?imdbID=' + movie.imdbID;
        li.appendChild(a);
        resultsList.appendChild(li);
    });
}
