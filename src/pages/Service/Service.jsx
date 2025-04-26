import React from "react";
import c from "./Service.module.scss";
import serviceImg1 from "../../assets/service1.png";
import serviceImg2 from "../../assets/service2.png";
import serviceImg3 from "../../assets/service3.png";
import serviceImg4 from "../../assets/service4.png";
import serviceImg5 from "../../assets/service5.png";
import serviceImg6 from "../../assets/service6.png";

const Service = () => {
  return (
    <>
      <div className={c.banner}>
        <h3>Our services</h3>
      </div>
      <div className={c.services}>
        <div className={c.service_item}>
          <div className={c.service_item_info}>
            <h3>01.</h3>
            <h4>Personal Fragrance Consultations</h4>
            <p>
              Choosing the right fragrance can be a deeply personal experience.
              Our team of knowledgeable fragrance experts is here to guide you
              through this process. Whether you're looking for a signature
              scent, a gift for a loved one, or need assistance in exploring new
              fragrance families, our consultants will take the time to
              understand your preferences and suggest the perfect matches.
            </p>
          </div>
          <img src={serviceImg1} alt="service img" />
        </div>

        <div className={c.service_item}>
          <div className={c.service_item_info}>
            <h3>02.</h3>
            <h4>Custom Fragrance Creation</h4>
            <p>
              Experience the art of bespoke perfumery with our custom fragrance
              creation service. Work closely with our skilled perfumers to craft
              a scent that is uniquely yours. From selecting individual notes to
              blending them into a harmonious symphony, we'll help you bring
              your fragrance vision to life. Whether it's a special occasion, a
              gift for someone dear, or simply a way to indulge in luxury, a
              custom-created perfume is an unforgettable experience.
            </p>
          </div>
          <img src={serviceImg2} alt="service img" />
        </div>

        <div className={c.service_item}>
          <div className={c.service_item_info}>
            <h3>03.</h3>
            <h4>Scented Gift Selection</h4>
            <p>
              Looking for a meaningful gift that leaves a lasting impression?
              Our scented gift selection service is designed to help you find
              the perfect fragrance gift for any occasion. Whether it's a
              birthday, anniversary, or a gesture of appreciation, our experts
              will assist you in choosing a fragrance that perfectly conveys
              your sentiments and makes the recipient feel cherished.
            </p>
          </div>
          <img src={serviceImg3} alt="service img" />
        </div>

        <div className={c.service_item}>
          <div className={c.service_item_info}>
            <h3>04.</h3>
            <h4>Fragrance Events and Workshops</h4>
            <p>
              Join us for fragrance-centric events and workshops that celebrate
              the art of perfumery. Immerse yourself in the captivating world of
              scents, learn from experts, and discover the nuances of different
              fragrance families. These events are perfect for fragrance
              enthusiasts and novices alike, providing a unique opportunity to
              expand your olfactory knowledge.
            </p>
          </div>
          <img src={serviceImg4} alt="service img" />
        </div>

        <div className={c.service_item}>
          <div className={c.service_item_info}>
            <h3>05.</h3>
            <h4>Eco-friendly Initiatives</h4>
            <p>
              At Local Face, we are committed to sustainability and
              eco-conscious practices. As part of our services, we offer
              guidance on selecting environmentally friendly and cruelty-free
              fragrances. We partner with brands that share our values and are
              dedicated to making a positive impact on the planet.
            </p>
          </div>
          <img src={serviceImg5} alt="service img" />
        </div>

        <div className={c.service_item}>
          <div className={c.service_item_info}>
            <h3>06.</h3>
            <h4>Online Shopping Convenience</h4>
            <p>
              Explore our carefully curated collection of perfumes from the
              comfort of your home. Our user-friendly website offers a seamless
              online shopping experience, complete with detailed product
              descriptions and customer reviews. You can also reach out to our
              customer support team for any assistance during your shopping
              journey.
            </p>
          </div>
          <img src={serviceImg6} alt="service img" />
        </div>
      </div>
    </>
  );
};

export default Service;
