document.addEventListener('DOMContentLoaded', () => {
  loadMovies();
});

document.getElementById('genre-filter').addEventListener('change', (event) => {
  const selectedGenre = event.target.value;
  pageNumber = 1;
  if (selectedGenre === 'all') {
    currentMovies = allMovies;
  } else {
    currentMovies = allMovies.filter(movie =>
      movie.genre.toLowerCase().includes(selectedGenre.toLowerCase())
    );
  }
  renderPage();
});

const pageSize = 5;
let pageNumber = 1;
let allMovies = [];
let currentMovies = [];

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const pageNumbersContainer = document.querySelector('.page-numbers');

function loadMovies() {
  fetch('./js/data/movies.json')
    .then(response => response.json())
    .then(data => {
      allMovies = data.movies;
      currentMovies = allMovies;
      renderPage();
    })
    .catch(error => console.error('Error loading movies:', error));
}

function renderPage() {
  renderCards(paginateMovies(currentMovies, pageSize, pageNumber));
  updatePaginationButtons(currentMovies.length, pageSize, pageNumber);
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
  });
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

  pageNumbersContainer.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    button.classList.add('page');
    if (i === currentPage) button.classList.add('active');

    button.addEventListener('click', () => {
      pageNumber = i;
      renderPage();
    });

    pageNumbersContainer.appendChild(button);
  }

  pageButtons.forEach((button, index) => {
    button.classList.toggle('active', index + 1 === currentPage);
    button.disabled = index + 1 > totalPages;
  });
}

prevButton.addEventListener('click', () => {
  if (pageNumber > 1) {
    pageNumber--;
    renderPage();
  }
});

nextButton.addEventListener('click', () => {
  const totalPages = Math.ceil(currentMovies.length / pageSize);
  if (pageNumber < totalPages) {
    pageNumber++;
    renderPage();
  }
});

pageButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    pageNumber = index + 1;
    renderPage();
  });
});
