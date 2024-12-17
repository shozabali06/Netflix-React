import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img className="banner-img" src={hero_banner} alt="banner" />
        <div className="hero-caption">
          <img className="caption-img" src={hero_title} alt="title" />
          <p>
            Discovering his ties to secret ancient order, a young man living in
            modern istanbul embarks on a quest to save the city from immortal
            enemies.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="play" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="play" />
              More Info
            </button>
          </div>
          <TitleCards title={"Now Playing"} category={"now_playing"} />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCards title={"Trending Today"} type={"trending"} />
        <TitleCards title={"Popular"} category={"popular"} />
        <TitleCards title={"Upcomings"} category={"upcoming"} />
        <TitleCards title={"Animation"} genre={16} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
