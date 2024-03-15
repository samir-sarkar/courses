const axios = require('axios');

// const playlistUrl = "https://www.youtube.com/watch?v=LjznJIMT0aU&list=PLEtjGa9VEukNKslFyRlhODXXuKgRnvVyM";
// const api_key = "AIzaSyBDEfO4CIj7Vg1ld_vRGATimN4fi7XuFfE";
async function fetchPlaylistData(playlistUrl) {
  try {
      // Extract playlist ID from URL
      const playlistId = playlistUrl.split('list=')[1];

      // Fetch playlist data from YouTube Data API
      const response = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems`, {
          params: {
              part: 'snippet',
              playlistId: playlistId,
              maxResults: 50, // Maximum number of videos to fetch (adjust as needed)
              key: process.env.REACT_APP_YOUTUBE_API_KEY // Replace with your YouTube API key
          }
      });
      // Return fetched data
      return response.data;
  } catch (error) {
      console.error('Error fetching playlist data:', error);
      return null;
  }
}
// fetchPlaylistData("https://www.youtube.com/watch?v=LjznJIMT0aU&list=PLEtjGa9VEukNKslFyRlhODXXuKgRnvVyM");
module.exports = fetchPlaylistData;
