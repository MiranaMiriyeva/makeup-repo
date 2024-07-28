import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <section id="hero-section">
        <div className="text animate-slide-in">
          <h1>Discover Your Beauty</h1>
          <p>Pamper Yourself with Our Professional Services and  </p>
          <p>High-Quality Products.</p>
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
        {/* <img
          src="https://images.squarespace-cdn.com/content/v1/5a931a17b27e397ab1207496/1714410554394-UNILE8N8F81KW8532NH8/image-asset.jpeg?format=500w"
          alt=""
        /> */}
        <img
          src="https://i.pinimg.com/564x/9e/2b/f5/9e2bf56f8e38f9271cac92e73385f7af.jpg"
          alt="about-artist"
        />
      </section>
      <section id="best-services">
        <h2>BEST MAKEUP SERVICES</h2>
        <p>Professional makeup</p>
        <div className="box-container">
          <div className="box">
            <img
              src="https://i.pinimg.com/736x/72/93/bf/7293bf1a499ffc702782daa9ae2b0a27.jpg"
              alt=""
            />
            <div className="details details-t">
              <h5>DAILY MAKEUP</h5>
              <span>From $20.0</span>
            </div>
          </div>

          <div className="box">
            <div className="details">
              <h5>WEDDING MAKEUP</h5>
              <span>From $50.0</span>
            </div>
            <img
              className="img-b"
              src="https://i.pinimg.com/736x/8b/39/9c/8b399c53a83665af25477cbe352c20a3.jpg"
              alt=""
            />
          </div>

          <div className="box box-t">
            <img
              src="https://i.pinimg.com/564x/5f/7f/3b/5f7f3b276fc80f0887cac1c3bde8c0c7.jpg"
              alt=""
            />
            <div className="details details-t">
              <h5>EVENT MAKEUP</h5>
              <span>From $40.0</span>
            </div>
          </div>

          <div className="box">
            <div className="details">
              <h5>CREATIVE MAKEUP</h5>
              <span>From $70.0</span>
            </div>
            <img
              className="img-b"
              src="https://i.pinimg.com/564x/92/ef/bb/92efbbce81465d2ce21bc57a9bb5eb56.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
      <section id="gallery">
        <h2>Check out our gallery</h2>
        <div className="image-boxes">
          <img
            className="img1"
            src="https://www.yelenaperunov.com/Beauty/IMG_0161%20(1)-1600.jpg"
            alt=""
          />
          <img
            className="img2"
            src="https://images.squarespace-cdn.com/content/v1/5a931a17b27e397ab1207496/1519697733098-6SMVDPJSNDUJN39RM64X/IMGL8671.JPG?format=500w"
            alt=""
          />
          <img
            className="img3"
            src="https://i.pinimg.com/564x/01/e8/04/01e80491c53d65f4e1811a9927ad071f.jpg"
            alt=""
          />
          <img
            className="img4"
            src="https://i.pinimg.com/564x/e7/20/4f/e7204ffdd26efd821bdd81edcaecbfe7.jpg"
            alt=""
          />
          <img
            className="img5"
            src="https://i.pinimg.com/564x/94/7f/7d/947f7deef4871b42220426a5d2d01da7.jpg"
            alt=""
          />
          <img
            className="img6"
            src="https://i.pinimg.com/564x/3d/7b/ed/3d7bed9170eede1436c6692041117d25.jpg"
            alt=""
          />
          <img
            className="img7"
            src="https://i.pinimg.com/564x/60/82/c5/6082c55aa05dc6db9b5b99caece155ea.jpg"
            alt=""
          />
        </div>
      </section>
      <section id="products">
        <h2>BEAUTY PRODUCTS</h2>
        <p className="bp-heading">Beauty products</p>
        <div className="container">
          <div>
            <img
              src="https://www.kikocosmetics.com/_next/image/?url=https%3A%2F%2Fassets.joqhl8w6.on-eva.io%2Fblob%2Fc4d9808f-8a46-4a9f-9a44-2750cee4b9f1&w=384&q=75"
              alt=""
            />
            <p className="category">Lipstick</p>
            <p className="name">KIKO Creamy Lipstick</p>
            <p className="price">$25.0</p>
          </div>

          <div>
            <img
              src="https://www.kikocosmetics.com/_next/image/?url=https%3A%2F%2Fassets.joqhl8w6.on-eva.io%2Fblob%2F36029597-4f47-1282-5aae-ac6a851dcff6&w=384&q=75"
              alt=""
            />
            <p className="category">Palette</p>
            <p className="name">KIKO Eyeshadow Plaette</p>
            <p className="price">$20.0</p>
          </div>

          <div>
            <img
              src="https://www.kikocosmetics.com/_next/image/?url=https%3A%2F%2Fassets.joqhl8w6.on-eva.io%2Fblob%2F18c0d6b8-7ae7-4cfe-8066-4c80ac73e944&w=384&q=75"
              alt=""
            />
            <p className="category">Mascara</p>
            <p className="name">KIKO Volume Mascara</p>
            <p className="price">$18.0</p>
          </div>

          <div>
            <img
              src="https://www.kikocosmetics.com/_next/image/?url=https%3A%2F%2Fassets.joqhl8w6.on-eva.io%2Fblob%2Fbe1fa520-7b5f-325c-64fe-8be7b643d95f&w=384&q=75"
              alt=""
            />
            <p className="category">Foundation</p>
            <p className="name">KIKO Powder Foundation</p>
            <p className="price">$20.0</p>
          </div>
        </div>
        <Link>VIEW ALL PRODUCTS</Link>
        <hr />
      </section>
    </div>
  );
};

export default Home;
