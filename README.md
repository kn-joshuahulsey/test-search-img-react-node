# Gap Take-Home Challenge

### Search and render with React, Node and Express

# Installation

Install dependencies `npm i` then run the app `npm run start-dev` and visit http://localhost:3000/ in your browser.

# Challenge

### Register a free Unsplash account

[Register a free developer account with Unsplash](https://unsplash.com/developers)

### Input field and post request

Create an input field and submit button where a user can enter a search term, "dogs", for example. When the user hits the submit button, a request with the search term should be made. Add a POST route `/api/search` in the server.js file to catch this request. Axios is included in the dependencies.

The express `/api/search` POST route should then take the search term and make a server-side api call to the Unsplash [search Api](https://unsplash.com/documentation#search-photos) for photos matching the search term.

### Server-side data transformation

When the response comes back, write a function on the server to transform the data before sending to the client. The function should iterate through the results array and create a new payload that contains an array of objects where each object has two properties: the `imageUrl` and `likes` with their corresponding values.

The image urls are located under the `urls` key in the response from Unsplash and the number of likes are under the `likes` key. The imageUrl can either be extracted from the `regular` or `full` image.

### Render with sort toggle

Send back the response to the client and render the images on the page with a responsive UI while making use of React functional components as opposed to classes.

There should also be a toggle on the front-end with the option to sort images by likes, from most likes to least likes and from least likes to most likes, the default render should sort the images by most likes to least likes.

# Example Reference UI

Example reference UI image in the public directory called `reference-ui.png`. Note this reference image includes other aspects such as the profile picture of the Unsplash user, which isn't a requirement for this challenge. Feel free to be creative with the UI which has a primary goal of being responsive and rendering the image urls derived from the search term.

# Submission

Push your code up to github and reply back with the url to the repo.
