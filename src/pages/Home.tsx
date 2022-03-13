import { IonGrid } from "@ionic/react";
import Navbar from "../components/Navbar";
import WrapperPage from "../components/WrapperPage";
import MovieList from "../components/MovieList";

import "./Home.css";

import { useEffect, useState } from "react";

const fetchPopular = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=b0a4a6eba278fb3dc72204ee76ad699f&language=id_ID&page=1"
  );
  const data = await response.json();
  return data;
};

const fetchNowPlaying = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=b0a4a6eba278fb3dc72204ee76ad699f&language=id_ID"
  );
  const data = await response.json();
  return data;
};

const fetchUpcoming = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=b0a4a6eba278fb3dc72204ee76ad699f&language=id_ID"
  );
  const data = await response.json();
  return data;
};

const Home: React.FC = () => {
  const [PopularMovies, setPopularMovies] = useState([]);
  const [NowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [UpcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    fetchPopular().then((res) => {
      setPopularMovies(res.results);
    });

    fetchNowPlaying().then((res) => {
      setNowPlayingMovies(res.results);
    });

    fetchUpcoming().then((res) => {
      setUpcomingMovies(res.results);
    });
  }, []);

  return (
    <WrapperPage>
      <IonGrid fixed>
        <Navbar></Navbar>

        {PopularMovies.length > 0 ? (
          <MovieList
            spaceBetween={0}
            sliderPerView={2}
            title="Popular"
            movieData={PopularMovies}
          ></MovieList>
        ) : (
          <div>Loading...</div>
        )}

        {NowPlayingMovies.length > 0 ? (
          <MovieList
            spaceBetween={-10}
            sliderPerView={3}
            title="Now Playing"
            movieData={NowPlayingMovies}
          ></MovieList>
        ) : (
          <div>Loading...</div>
        )}
        {UpcomingMovies.length > 0 ? (
          <MovieList
            spaceBetween={-10}
            sliderPerView={3}
            title="Up Coming"
            movieData={UpcomingMovies}
          ></MovieList>
        ) : (
          <div>Loading...</div>
        )}
      </IonGrid>
    </WrapperPage>
  );
};

export default Home;
