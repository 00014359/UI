import React from "react";
import c from "./About.module.scss";
import storyImage from "../../assets/spacer.jpg";

const About = () => {
  return (
    <>
      {/* banner part */}
      <div className={c.banner}>
        <div className={c.banner_content}>
          <h3>About us</h3>
          <p>
            At Belle Aura, we believe that perfumes are more than just scents;
            they are expressions of one's individuality and style. Our passion
            for exquisite fragrances led us to curate a collection that captures
            the essence of diverse personalities, bringing you an unparalleled
            olfactory experience.
          </p>
        </div>
      </div>

      {/* story part */}
      <div
        style={{
          height: "300px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h3 style={{ fontSize: "32px", color: "pink" }}>Our Story</h3>
      </div>
      <img src={storyImage} alt="spacer image" style={{ width: "100%" }} />

      {/* uniqueness */}
      <div className={c.uniqueness}>
        <h3>What Makes Us Unique</h3>
        <div className={c.uniqueness_content}>
          <div className={c.uniqueness_content_item}>
            <b>Locally Inspired</b>
            <p>
              Our perfumes are meticulously crafted to reflect the cultural
              heritage, traditions, and landscapes of various regions. From the
              vibrant streets of Marrakech to the serene cherry blossom gardens
              of Kyoto, each fragrance tells a unique story that resonates with
              its origin
            </p>
          </div>

          <div className={c.uniqueness_content_item}>
            <b>High-Quality Ingredients</b>
            <p>
              We believe that the key to an extraordinary scent lies in the
              quality of ingredients. That's why we collaborate with expert
              perfumers who source the finest and ethically-sourced materials
              from around the world. We never compromise on the quality of our
              products, ensuring a long-lasting and luxurious experience.
            </p>
          </div>

          <div className={c.uniqueness_content_item}>
            <b>Personalized Service</b>
            <p>
              We understand that choosing the perfect scent is a deeply personal
              experience. Our team of fragrance experts is always ready to
              assist you in finding a fragrance that complements your
              personality and style. Whether you're exploring new scents or
              seeking to rediscover an old favorite, we're here to guide you
              every step of the way.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
