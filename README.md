# Movie-Collection

A movie collection web app using CLI commands, file operations and Git collaboration workflows

## Project Setup

### Clone the Repository

    git clone https://github.com/MarionBraide/movie-collection.git
    cd movie-collection

### Open the Project

    - Open the folder in VS Code or any editor of your choice.
    - Run the Project (ran from terminal using "start index.html")

## Folder Structure

    movie-collection/
    ├── css/         #Stylesheets
    │   └── style.css
    ├── images/      #Movie poster images
    ├── js/          #JavaScript files
    ├── index.html   #Main HTML file
    └── README.md    #Project documentation

## Available CLI Commands (Bash)

### Navigate directories

    cd folder-name
    pwd
    ls

### Git commands

    git status
    git add ./filename
    git commit -m "message"
    git push -u origin
    git checkout -b feature/branch-name

## Git Workflow Steps

### Branching

    - Create a new branch for a feature or task:
        git checkout -b feature/your-feature

### Working

    - Make changes locally in your branch. Test your work (HTML, CSS, JS) before committing

### Committing

    git add .
    git commit -m "Describe changes"

### Pushing

    git push --set-upstream origin feature/your-feature

### Merging

    - Open a pull request on GitHub to merge feature branches into main

## Feature list and implementation

### feature/base-html-structure

    - Created the base HTML structure with:
        - Header containing page title and genre filter dropdown
        - Main content section with a grid layout for movie cards
        - 10 example movie cards, each showing:
            - Title
            - Release year
            - Genre
            - Short description
            - Movie poster (placeholders initially then local images after)

### feature/css-layout

    - Implemented responsive grid layout for movie cards
    - Applied basic styling for:
        - Headers
        - Footers
        - Main content area
    - Styled movie cards with:
        - Typography
        - Spacing
        - Borders
    - Styled pagination buttons for consistent appearance

### feature/data-structure

    - Moved example movie cards from index.html to movies.json
    - Implemented JavaScript fetch request to load movie data
    - Parsed JSON response and looped through movie list
    - Rendered movie cards dynamically inside the movie grid container
    - Ensured rendered cards matched the existing UI design

### feature/filter-movies

    - Implemented genre-based movie filtering
    - Added "All" option to display all movies
    - Added event listener to the genre dropdown
    - Filtered movie array based on selected genre
    - Re-rendered filtered movie list dynamically
    - Handled "All" option by resetting filter and showing full dataset

### feature/pagination

    - Implemented pagination with dynamic page numbers based on filtered movie list
    - Added event listener to pagination buttons
    - Updated pagination buttons to reflect current page number and total pages
    - Filtered movie array based on selected genre and current page number
    - Re-rendered filtered and paginated movie list dynamically

## Team Member Contributions

### Marionbraide Contributions

    - Created the base HTML structure with semantic tags for header, main, footer, and movie cards
    - Implemented CSS grid layout for displaying movies
    - Set up folder structure: css/, js/, images/
    - Linked local images to HTML correctly
    - Documented project setup and workflow in README

### Iyobosa Contributions

    - Moved movie data from HTML into a JSON file.
    - Used Fetch API to load movie data.
    - Rendered movie cards from data while keeping the existing UI layout.
    - Implemented genre-based movie filtering.
    - Implemented pagination with dynamic page numbers

## Lessons learned from collaboration

### Marionbraide

    - Working with Git branches and switching between them can be confusing at first.
    - I struggled with accidentally editing files in the wrong branch, which caused CSS and HTML to not sync correctly and even temporarily “lost” my HTML.
    - Overall, I’m improving my workflow, and these experiences are teaching me to plan branch structure and commits more carefully.

### Iyobosa

    - I discovered how to correctly specify file paths when using the Fetch API to load JSON data into a web page.
    - Double-check that you are using the correct properties and values of your data before trying to debug other issues.
    - Gained experience working with Git collaboration workflows.
    - I learned to avoid repetition by creating functions to perform specific tasks.
