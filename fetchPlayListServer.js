const express = require('express');
const fetchPlaylistData = require('./fetchYouTubePlayList');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/api/playlist', async (req, res) => {
    const { url } = req.query;
    try {
        const playlistData = await fetchPlaylistData(url);
        res.json(playlistData);
    } catch (error) {
        console.error('Error fetching playlist data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
