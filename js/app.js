document.addEventListener('DOMContentLoaded', () => {
  loadMovies();
});

document.getElementById('genre-filter').addEventListener('change', (event) => {
  const selectedGenre = event.target.value;
  pageNumber = 1;
  if (selectedGenre === 'all') {
    loadMovies();
    return;
  }
  filterMoviesByGenre(selectedGenre);
});

const pageSize = 5;
let pageNumber = 1;
let allMovies = [];

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const pageButtons = document.querySelectorAll('.page');

function loadMovies() {
  fetch('./js/data/movies.json')
    .then(response => response.json())
    .then(data => {
      allMovies = data.movies;
      console.log('Movies loaded');
      renderCards(paginateMovies(allMovies, pageSize, pageNumber));
      updatePaginationButtons(allMovies.length, pageSize, pageNumber);
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
  const filteredMovies = allMovies.filter(movie =>
    movie.genre.toLowerCase().includes(genre.toLowerCase())
  );
  renderCards(paginateMovies(filteredMovies, pageSize, pageNumber));
  updatePaginationButtons(filteredMovies.length, pageSize, pageNumber);
}

function paginateMovies(movieList, pageSize, pageNumber) {
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return movieList.slice(startIndex, endIndex);
}

function updatePaginationButtons(totalMovies, pageSize, currentPage) {
  const totalPages = Math.ceil(totalMovies / pageSize);
  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === totalPages;
}

prevButton.addEventListener('click', () => {
  if (pageNumber > 1) {
    pageNumber--;
    loadMovies();
  }
});

nextButton.addEventListener('click', () => {
  const totalPages = Math.ceil(allMovies.length / pageSize);
  if (pageNumber < totalPages) {
    pageNumber++;
    loadMovies();
  }
});

pageButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const prevActive = document.querySelector('.page.active');
    if (prevActive) {
      prevActive.classList.remove('active');
    }
    pageNumber = index + 1;
    button.classList.add('active');
    loadMovies();
  });
});
