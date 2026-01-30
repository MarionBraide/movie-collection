document.addEventListener('DOMContentLoaded', () => {
  loadMovies();
});

document.getElementById('genre-filter').addEventListener('change', (event) => {
  const selectedGenre = event.target.value;
  if (selectedGenre === 'all') {
    loadMovies();
    return;
  }
  filterMoviesByGenre(selectedGenre);
});

function loadMovies() {
  fetch('./js/data/movies.json')
    .then(response => response.json())
    .then(data => {
      const movies = data.movies;
      console.log('Movies loaded');
      renderCards(movies)
    })
    .catch(error => console.error('Error loading movies:', error));
}

function renderCards(movieList) {
  const cardGrid = document.querySelector('.movie-grid');
  cardGrid.innerHTML = '';

  movieList.forEach(movie => {
    const card = document.createElement('article');
    card.className = 'movie-card';

    card.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title} Poster">
      <h2>${movie.title}</h2>
      <p><strong>Year:</strong> ${movie.year}</p>
      <p><strong>Genre:</strong> ${movie.genre}</p>
      <p>${movie.description}</p>
    `;

    cardGrid.appendChild(card);
  })
}

function filterMoviesByGenre(genre) {
  fetch('./js/data/movies.json')
    .then(response => response.json())
    .then(data => {
      const movies = data.movies;
      const filteredMovies = movies.filter(movie => movie.genre.toLowerCase().includes(genre.toLowerCase()));
      console.log('Movies loaded');
      renderCards(filteredMovies)
    })
    .catch(error => console.error('Error loading movies:', error));
}
