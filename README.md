# Movie-Collection
Movie collection web app using CLI commands, file operations and Git collaboration workflows

1. Project Setup Instructions

    Clone the Repository
        git clone https://github.com/MarionBraide/movie-collection.git
        cd movie-collection


    Open the Project:
        - Open the folder in VS Code or any editor of your choice.
        - Run the Project (ran from terminal using "start index.html")

    Folder Structure
            movie-collection/
            ├── css/         #Stylesheets
            │   └── style.css
            ├── images/      #Movie poster images
            ├── js/          #JavaScript files
            ├── index.html   #Main HTML file
            └── README.md    #Project documentation

2. Available CLI Commands (Bash)
        Navigate directories:
            cd folder-name
            pwd
            ls
        Git commands:
            git status
            git add ./filename
            git commit -m "message"
            git push -u origin
            git checkout -b feature/branch-name
    
3. Git Workflow Steps
        Branching:
        - Create a new branch for a feature or task:
            git checkout -b feature/your-feature

        Working:
        - Make changes locally in your branch. Test your work (HTML, CSS, JS) before committing

        Committing:
            git add .
            git commit -m "Describe changes"

        Pushing:
            git push --set-upstream origin feature/your-feature

        Merging:
        - Open a pull request on GitHub to merge feature branches into main

4. Feature list and implementation


5. Team Member Contributions
    Marionbraide Contributions:
        - Created the base HTML structure with semantic tags for header, main, footer, and movie cards
        - Implemented CSS grid layout for displaying movies
        - Set up folder structure: css/, js/, images/
        - Linked local images to HTML correctly
        - Documented project setup and workflow in README

6. Lessons learned from collaboration
    Marionbraide:
    - Working with Git branches and switching between them can be confusing at first.
    - I struggled with accidentally editing files in the wrong branch, which caused CSS and HTML to not sync correctly and even temporarily “lost” my HTML.
    - Overall, I’m improving my workflow, and these experiences are teaching me to plan branch structure and commits more carefully.