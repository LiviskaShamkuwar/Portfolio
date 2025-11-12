import React from "react";
import { Link } from "react-scroll";
import "../App.css";

const Home = () => {
  return (
    <section className="home" id="home">
      <h1>Welcome to My Portfolio</h1>
      <p>I’m Liviska Shamkuwar, Front-End Developer.</p>
      <Link to="about" smooth={true} duration={600}>
        <button className="btn">Know More About Me</button>
      </Link>
    </section>
  );
};

export default Home;
