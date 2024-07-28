import React from "react";

const Home = () => {
  return (
    <div className="home">
      <section id="hero-section">
        <div className="text animate-slide-in">
          <h1>Discover Your Beauty</h1>
          <p>Pamper Yourself with Our Professional </p>
          <p>Services and High-Quality Products.</p>
        </div>
      </section>
      <section id="about-artist">
        <div className="text">
          <h2>The center of attention.</h2>
          <p>
            My love of makeup started young while often sneaking into my
            mother’s makeup vanity and playing with various shades of lipstick,
            eyeshadow and blush. Makeup became a full blown obsession after four
            years of art school where I learned to master the airbrush
            technique.
          </p>
          <button>CONTACT US</button>
        </div>
        <img
          src="https://images.squarespace-cdn.com/content/v1/5a931a17b27e397ab1207496/1714410554394-UNILE8N8F81KW8532NH8/image-asset.jpeg?format=500w"
          alt="about-artist"
        />
      </section>
    </div>
  );
};

export default Home;
