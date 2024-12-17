import React, { useEffect, useRef, useState } from "react";
import cards_data from "../../assets/cards/Cards_data";
import "./TitleCards.css";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category, genre, type }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDZhMWQ1NjJlOTViYTQ2MTEyYThiYzA5ZDk3MjY3YyIsIm5iZiI6MTczNDIzNDYxMi4wNjIsInN1YiI6IjY3NWU1MWY0MmNiOTZlNTg4MGM5MTE2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.852WexuF8ERF8hu3Pw7xXDWhLRRLkgDQrJIET7Yq3PI",
    },
  };

  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  };

  useEffect(() => {
    cardsRef.current.addEventListener("wheel", handleWheel);
    if (category) {
      fetch(
        `https://api.themoviedb.org/3/movie/${
          category ? category : "now_playing"
        }?language=en-US&page=1`,
        options
      )
        .then((res) => res.json())
        .then((res) => setApiData(res.results))
        .catch((err) => console.error(err));
    } else if (genre) {
      fetch(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre}`,
        options
      )
        .then((res) => res.json())
        .then((res) => setApiData(res.results))
        .catch((err) => console.error(err));
    } else if (type) {
      fetch(
        "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
        options
      )
        .then((res) => res.json())
        .then((res) => setApiData(res.results))
        .catch((err) => console.error(err));
    }
  }, []);

  return (
    <div className="title-cards">
      <h2>{title}</h2>
      <div className="card-list " ref={cardsRef}>
        {console.log("Popular", apiData)}
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt=""
              />
              <p>{card.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
