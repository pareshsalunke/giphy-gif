This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

<h1>Giphy-gif</h1>

A react-redux based website to load the GIFs
1) Search the GIFs with multiple keywords (spaced letters allowed)
2) Shows trending GIFs on load of website.
3) Search on Enter.
3) Modal functionality on click over GIF

How to install locally

git clone https://github.com/pareshsalunke/giphy-gif.git or OPEN the zip file.

#Install all the necessary packages
npm install

TO access Giphy API (If the Public API key has changed)
1) Go to https://developers.giphy.com/
2) Sign up and Create App
3) Copy API KEY from API account and update the constant API_KEY in ~/<project-root-directory>/src/actions/index.js

#To start the development server
npm start

The website will be served on
Local:            http://localhost:3000/
On Your Network:  http://192.168.0.8:3000/

You are making this world a better place by using GIFs

If it doesn't work, please email me at pareshsalunke@gmail.com

OPTIONAL
Removed the reference for Chrome dev tool extension from configureStore since not everyone needs it unless except for development purpose. Its a really good tool for Redux development. If you happen to install it in chrome, please uncomment the 
