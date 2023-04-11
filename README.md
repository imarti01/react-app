# REACT-APP <!-- omit in toc -->

## Recipe website

This is a responsive website that displays information from different recipes. This information is extracted from the Spoonacular API.

The app uses the React JavaScript library because of its focus on component reuse, its use of virutal DOM and the ability to render on the server, in addition to its large community and ecosystem.

Other libraries used are:

- Axios for handling HTTP requests.
- React-Query to manage cache and data management in the application.
- React-Loading-Skeleton to display a load skeleton while getting the src from the images.
- React-Router-Dom to manage routes in the app.
- Sass to add custom styles.
- React-Icons to add icons to the user inferface.
- SweetAlert2 to display custom alerts and messages.

## Table of Contents <!-- omit in toc -->

- [Getting Started](#getting-started)
- [About The Project](#About-the-project)
- [Author](#author)

## Getting Started

This project was bootstrapped with [Vite](https://vitejs.dev/guide/).

First, you will need to clone the repo:

```bash
$ git clone https://github.com/imarti01/react-app.git
```

Run `npm i` in the terminal to install the dependencies.

Then, run `npm run dev` to start up the app.

### The API

You will need to register on the [Spoonacular API](https://spoonacular.com/food-api) in order to get a API KEY.

Once you get it, you must create a file `.env` and save it as follows:

VITE_REACT_APP_API_KEY=`api key personal`

The API is limited to only 150 calls/day.

## About the project

### Features

- Search for recipes from an ingredient.
- Visualize recipes filtering by gluten-free, vegan or vegetarian diet
- Visualize recipes filtering by type of cuisine from different countries.
- See the details of a specific recipe, including ingredients and instructions.
- Easy to use and very intuitive.

### Screenshots

<!-- <img src='https://res.cloudinary.com/duokspzx0/image/upload/v1678717505/readme/screencapture-localhost-3000-store-2023-03-13-15_23_02_llzsvp.png' width='600'> -->

## Author

- **[Isaura Martí](https://github.com/imarti01)**
