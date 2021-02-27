# Spaced Repetition Capstone 

# Live App: https://spaced-repetition-ggfun9pzl-lirondco.vercel.app/register

## About The App

This app is a demo of the [« spaced repetition »](https://en.wikipedia.org/wiki/Spaced_repetition) method of learning new vocabulary in a foreign language. Currently only Hebrew is supported, but you can fork this repo and then the matching [server repo](https://github.com/lirondco/spaced-repetition-api) if you would like to expand this app and include your own languages. 

### How to use

#### Login and Registration

A user when not logged in is redirected to the registration page upon visiting the home page. The user can then either register as a new user or log in as an existing one using their credentials.

#### Dashboard

A user once registered or logged in will be redirected to the dashboard that contains a list of all words that need to be practised, their current score, the name of the language, and a link to start practising. 

#### Learning Mode

Once you click the link to start practising, you will be directed to a learning page where you will be presented with a Hebrew word or phrase that you need to translate, your total score, and the number of times you got this word correctly and incorrectly. You will then be prompted to input your answer and once you click the submit button, you will be redirected to a page that gives you a feedback whether or not you got the word correctly.

### API Documentation

For API Documentation please visit the [server repo](https://github.com/lirondco/spaced-repetition-api).

## Setup

To setup the application

1. Fork and clone the project to your machine
2. `npm install`. This will also install the application *Cypress.io* for running browser integration tests

The project expects you have the Spaced repetition API project setup and running on http://localhost:8000.

Find instructions to setup the API here https://github.com/Thinkful-Ed/spaced-repetition-api.

## Running project

This is a `create-react-app` project so `npm start` will start the project in development mode with hot reloading by default.

## Running the tests

This project uses [Cypress IO](https://docs.cypress.io) for integration testing using the Chrome browser.

Cypress has the following expectations:

- You have cypress installed (this is a devDependency of the project)
- You have your application running at http://localhost:3000.
  - You can change the address of this expectation in the `./cypress.json` file.
- Your `./src/config.js` is using http://localhost:8000/api as the `API_ENDPOINT`

To start the tests run the command:

```bash
npm run cypress:open
```

On the first run of this command, the cypress application will verify its install. Any other runs after this, the verification will be skipped.

The command will open up the Cypress application which reads tests from the `./cypress/integration/` directory. You can then run individual tests by clicking on the file names or run all tests by clicking the "run all tests" button in the cypress GUI.

Tests will assert against your running localhost client application.

You can also start all of the tests in the command line only (not using the GUI) by running the command:

```bash
npm run cypress:run
```

This will save video recordings of the test runs in the directory `./cypress/videos/`.
