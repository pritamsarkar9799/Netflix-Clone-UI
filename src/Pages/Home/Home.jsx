import React from 'react';
import './Home2.css';
import Navbar from '../../Components/Navbar/Navbar';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCards from '../../Components/TitleCards/TitleCards';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
  return (
    <div className="home">
      <Navbar />

      <div className="hero">
        {/* YouTube Video Background */}
        <div className="youtube-background">
          <iframe
            src="https://www.youtube.com/embed/80dqOwAOhbo?autoplay=1&mute=1&loop=1&controls=0&playlist=80dqOwAOhbo"
            title="YouTube video background"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>

        {/* Caption Overlay */}
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="" /> Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="" /> More Info
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Below Hero */}
      <TitleCards title="Popular on Netflix" category="now_playing" />
      <div className="more-cards">
        <TitleCards title="BlockBuster Movies" category="now_playing" />
        <TitleCards title="Only On Netflix" category="popular" />
        <TitleCards title="Upcoming" category="upcoming" />
        <TitleCards title="Top Movies For You" category="top_rated" />
      </div>

      <Footer />
    </div>
  );
};

export default Home;

