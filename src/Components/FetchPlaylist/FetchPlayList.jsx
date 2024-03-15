import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import YouTube from 'react-youtube';

const PlaylistComponent = () => {
    const playlistUrl = "https://www.youtube.com/watch?v=LjznJIMT0aU&list=PLEtjGa9VEukNKslFyRlhODXXuKgRnvVyM";
    // const apiKey = "AIzaSyBDEfO4CIj7Vg1ld_vRGATimN4fi7XuFfE";
    // const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
    const [playlistData, setPlaylistData] = useState(null);
    useEffect(() => {
        const fetchPlaylistData = async () => {
            // const playlistId = playlistUrl.split('list=')[1];
            try {
                const response = await axios.get('http://localhost:5000/api/playlist', {
                    params: { url: playlistUrl }
                });
                // const response = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems`, {
                //     params: {
                //         part: 'snippet',
                //         playlistId: playlistId,
                //         maxResults: 50, // Maximum number of videos to fetch (adjust as needed)
                //         key: apiKey // Replace with your YouTube API key
                //     }
                // });
                console.log(response.data);
                setPlaylistData(response.data);
            } catch (error) {
                console.error('Error fetching playlist data:', error);
            }
        }
        fetchPlaylistData();
    }, []);

    // const opts = {
    //     height: '315',
    //     width: '560',
    //     playerVars: {
    //         autoplay: 0
    //     }
    // };

    return (
        <div>
            {playlistData ? (
                <div>
                    {playlistData.items.map(item => (
                        <div key={item.id}>
                            <h2>{item.snippet.title}</h2>
                            {/* <YouTube videoId={item.snippet.resourceId.videoId} opts={opts} /> */}
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default PlaylistComponent;
