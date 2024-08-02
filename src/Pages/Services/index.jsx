import React from "react";

const Services = () => {
  return (
    <div id="services">
      <div className="box">
        <div className="details">
          <span>From $20</span>
          <h2>Daily makeup</h2>
          <p>
            Complete makeup application, as natural or bold as you’d like it. I
            will consult with you beforehand to make sure we are on the same
            page.
          </p>
          <div className="div">
            <p>
              {" "}
              <i class="fa-solid fa-check"></i> Lorem ipsum dolor sit amet
            </p>
            <p>
              {" "}
              <i class="fa-solid fa-check"></i> Consectetur adipiscing elit
            </p>
            <p>
              {" "}
              <i class="fa-solid fa-check"></i>Sed do eiusmod tempor incididunt
            </p>
          </div>
          <button>GET A QUOTE</button>
        </div>
        <div className="images">
          <img
            className="img1"
            src="https://i.pinimg.com/736x/72/93/bf/7293bf1a499ffc702782daa9ae2b0a27.jpg"
            alt=""
          />
          <img
            className="img2"
            src="https://i.pinimg.com/736x/e4/a3/ca/e4a3ca6857ccfac6247f86f4afd77fc5.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="box">
        <div className="images">
          <img
            className="img1"
            src="https://i.pinimg.com/736x/25/cc/64/25cc6442b0191e0a653ae6e5d5b4097b.jpg"
            alt=""
          />
          <img
            className="img2"
            src="https://i.pinimg.com/736x/8b/39/9c/8b399c53a83665af25477cbe352c20a3.jpg"
            alt=""
          />
        </div>
        <div className="details">
          <span>From $50</span>
          <h2>Weeding makeup</h2>
          <p>
            Wedding makeup is so much more than just the day-of application.
            I’ll be here from start to finish, answering any questions you have
            and making sure everythings.
          </p>
          <div className="div">
            <p>
              {" "}
              <i class="fa-solid fa-check"></i> Lorem ipsum dolor sit amet
            </p>
            <p>
              {" "}
              <i class="fa-solid fa-check"></i> Consectetur adipiscing elit
            </p>
            <p>
              {" "}
              <i class="fa-solid fa-check"></i>Sed do eiusmod tempor incididunt
            </p>
          </div>
          <button>GET A QUOTE</button>
        </div>
      </div>

      <section id="contact">
        <div className="left-side">
          <h2>BOOK ONLINE FOR</h2>
          <span>20% DISCOUNT</span>
        </div>
        <div className="right-side">
          <h2>GET A QUOTE</h2>
          <form>
            <div>
              <input type="text" placeholder="Name" required />
              <input type="number" placeholder="Phone number" required />
            </div>
            <div>
              <input type="email" placeholder="Email" required />
              <select required>
                <option value="Makeup">Makeup</option>
                <option value="Hair">Hair</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <textarea placeholder="Your message"></textarea>
          </form>
          <button className="book">Book</button>
        </div>
      </section>

      <div className="box">
        <div className="details">
          <span>From $40</span>
          <h2>Event makeup</h2>
          <p>
            Complete makeup application, as natural or bold as you’d like it. I
            will consult with you beforehand to make sure we are on the same
            page.
          </p>
          <div className="div">
            <p>
              {" "}
              <i class="fa-solid fa-check"></i> Lorem ipsum dolor sit amet
            </p>
            <p>
              {" "}
              <i class="fa-solid fa-check"></i> Consectetur adipiscing elit
            </p>
            <p>
              {" "}
              <i class="fa-solid fa-check"></i>Sed do eiusmod tempor incididunt
            </p>
          </div>
          <button>GET A QUOTE</button>
        </div>
        <div className="images">
          <img
            className="img1"
            src="https://i.pinimg.com/564x/3d/7b/ed/3d7bed9170eede1436c6692041117d25.jpg"
            alt=""
          />
          <img
            className="img2"
            src="https://i.pinimg.com/564x/6e/30/86/6e3086f7f375aafdc6bf4bdca21a1250.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="box">
        <div className="images">
          <img
            className="img1"
            src="https://i.pinimg.com/564x/a0/74/a8/a074a878266953c3ea74652e0369bff6.jpg"
            alt=""
          />
          <img
            className="img2"
            src="https://i.pinimg.com/736x/63/5d/19/635d1932c439381ab9541e85cc942fac.jpg"
            alt=""
          />
        </div>
        <div className="details">
          <span>From $70</span>
          <h2>Creative makeup</h2>
          <p>
            Complete makeup application, as natural or bold as you’d like it. I
            will consult with you beforehand to make sure we are on the same
            page.
          </p>
          <div className="div">
            <p>
              {" "}
              <i class="fa-solid fa-check"></i> Lorem ipsum dolor sit amet
            </p>
            <p>
              {" "}
              <i class="fa-solid fa-check"></i> Consectetur adipiscing elit
            </p>
            <p>
              {" "}
              <i class="fa-solid fa-check"></i>Sed do eiusmod tempor incididunt
            </p>
          </div>
          <button>GET A QUOTE</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
