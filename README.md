# DONUT: Donate Used Things

A full stack web application for people who want to donate their used items or receive used items for free.

## Live Demo
[DONUT](https://donate-used-things.herokuapp.com/#)

## Technologies Used
- React
- Bootstrap 5
- React Bootstrap
- Node.js
- Express.js
- PostgreSQL
- JavaScript ES6
- HTML5
- CSS3
- [Geocoding API](https://developers.google.com/maps/documentation/geocoding/overview)
- Webpack
- Babel
- Dotenv
- Heroku

## Features
- User can view the items that were donated
- User can see the details of the donated item
- User can search a specific item by using the searchbar
- User can create their own account
- User can input their current location automatically when signing up
- User can sign in with their account
- User can donate an item by using the donate form

## Stretch Features
- User can communicate with other users and meet up
- User can go to their personal info page

## Preview


## Development

### System Requirements

- Node.js 16 or higher
- NPM 6 or higher
- Postgres

### Getting Started

1. Clone the repository.

    ```shell
    git clone git@github.com:janiicelee/project-donut.git
    cd project-donut
    ```

2. Install all dependencies with NPM.

    ```shell
    npm install
    ```
    
3. Fill in the empty values of the .env.example file and copy it.

    ```shell
    cp .env.example .env
    ```

4. Start PostgreSQL.

    ```shell
    sudo service postgresql start
    ```
5. Create a database (make sure it matches .env.example)
    ```shell
    createdb yourDatabaseName
    ```
6. Import your database into Postgres.
    ```shell
    npm run db:import
    ```   
7.  Start the project. Once started, you can view the application by opening http://localhost:3000 in your browser.

    ```shell
    npm run dev
    ```

8. View your database through Pgweb.
    ```shell
    pgweb --db=yourDatabaseName
    ```

