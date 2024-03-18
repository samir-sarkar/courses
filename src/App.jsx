// import Home from "./Pages/Home/Home";
import CoursesContent from "./Pages/CourseContent/CourseContent";

import './App.scss';
import { useEffect, useState } from "react";
import axios from "axios";
// import PlaylistComponent from "./Components/FetchPlaylist/FetchPlayList";

const App = () => {
  // const playlistUrl = "https://www.youtube.com/watch?v=LjznJIMT0aU&list=PLEtjGa9VEukNKslFyRlhODXXuKgRnvVyM";
  const playlistUrl = "https://www.youtube.com/watch?v=b2XCUEq385w&list=PLbqGQ5B2op8QfvAfHSpw5jn_Nv22JQuM-";
  const [playlistData, setPlaylistData] = useState(null);
  useEffect(() => {
      const fetchPlaylistData = async () => {
          const playlistId = playlistUrl.split('list=')[1];
          try {
              // const response = await axios.get('http://localhost:5000/api/playlist', {
              //     params: { url: playlistUrl }
              // });
              const response = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems`, {
                  params: {
                      part: 'snippet',
                      playlistId: playlistId,
                      maxResults: 50, // Maximum number of videos to fetch (adjust as needed)
                      key: process.env.REACT_APP_YOUTUBE_API_KEY //  your YouTube API key
                  }
              });
              console.log(response.data);
              setPlaylistData(response.data);
          } catch (error) {
              console.error('Error fetching playlist data:', error);
          }
      }
      fetchPlaylistData();
  }, []);
  return (
    <>
      {/* <PlaylistComponent /> */}
      {/* <Home data={playlistData}/> */}
      <CoursesContent data={playlistData}/>
    </>
  )
}

export default App;