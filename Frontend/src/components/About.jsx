import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Welcome to Savory, where global flavors meet to create a unique dining experience. Our diverse menu, inspired by culinary traditions from around the world, features dishes crafted with the freshest ingredients and a touch of creativity. Our talented chefs combine traditional techniques with modern innovation, ensuring each dish is a delightful experience. Enjoy a warm and inviting atmosphere perfect for any occasion, making every visit to Savory special.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
