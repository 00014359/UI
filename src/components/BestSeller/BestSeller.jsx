import React from "react";
import c from "./BestSeller.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import valuesImage from "../../assets/valuesImage.jpg";

const businessData = [
  {
    name: '"Safinur" MCHJ',
    rating: "AA",
    inn: 301576714,
    status: "Platinium",
    styleId: 0,
  },
  {
    name: '"Baraka Biznes" AJ',
    rating: "A",
    inn: 305124578,
    status: "Gold",
    styleId: 1,
  },
  {
    name: '"Ideal Market" MCHJ',
    rating: "B",
    inn: 307896541,
    status: "Silver",
    styleId: 2,
  },
  {
    name: '"Oltin Qo\'l" MCHJ',
    rating: "AAA",
    inn: 309874512,
    status: "Platinium",
    styleId: 3,
  },
  {
    name: '"Tezkor Servis" AJ',
    rating: "BB",
    inn: 302156498,
    status: "Bronze",
    styleId: 3,
  },
  {
    name: '"Safinur" MCHJ',
    rating: "AA",
    inn: 301576714,
    status: "Platinium",
    styleId: 0,
  },
  {
    name: '"Baraka Biznes" MCHJ',
    rating: "A",
    inn: 305124578,
    status: "Gold",
    styleId: 1,
  },
];

const BestSeller = () => {
  return (
    <div className={c.bestsellers}>
      <h2 className={c.title}>Best selling products</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={12}
        className={c.swiperMain}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          600: {
            slidesPerView: 3,
          },
          900: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
      >
        {businessData.map((item) => (
          <SwiperSlide key={item.inn}>
            <img
              src={valuesImage}
              alt="Card Background image"
              style={{ width: "100%", aspectRatio: "4/5", objectFit: "cover" }}
            />

            <h3
              style={{
                margin: 0,
                padding: 0,
                width: "100%",
                textAlign: "center",
              }}
            >
              {item.name}
            </h3>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <p style={{ margin: 0 }}>$ {item.inn}</p>
              <p style={{ margin: 0, marginLeft: 10 }}>{item.rating}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BestSeller;
