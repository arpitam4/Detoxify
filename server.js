// server.js

const express = require('express');
const app = express();
const axios = require('axios');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const PORT = process.env.PORT || 9999;

// Serve static files (HTML, CSS, etc.)
app.use(express.static(path.join(__dirname, 'public')));


// Redirect route for Spotify authorization
app.get('/login', (req, res) => {
  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const redirect_uri = process.env.REDIRECT_URI; // Encode URI component
  const scopes = 'user-read-private user-top-read playlist-modify-public playlist-modify-private';
  const state = ''; // Optionally, you can add state for security

  //const authorizationUrl = `https://accounts.spotify.com/en/authorize?client_id=${client_id}&response_type=code&redirect_uri=http://localhost:9999/MenuPage.html&state=${state}&show_dialog=false&scope=${encodeURIComponent(scopes)}`;
  const authorizationUrl = 'https://accounts.spotify.com/en/authorize?client_id=0ed9ce5473ad4212a584161201e9e7a8&response_type=code&redirect_uri=http://localhost:9999/MenuPage.html&state=&show_dialog=false&scope=user-read-private%20user-top-read%20playlist-modify-public%20playlist-modify-private'

  res.redirect(authorizationUrl);
});



// Serve MenuPage.html
app.get('/MenuPage.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'MenuPage.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
