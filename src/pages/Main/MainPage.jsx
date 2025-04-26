import React from "react";
import c from "./MainPage.module.scss";
import valuesImage from "../../assets/valuesImage.jpg";
import BestSeller from "../../components/BestSeller/BestSeller";
import offSale from "../../assets/50ofSale.jpg";

const MainPage = () => {
  return (
    <div>
      <div className={c.banner_container}>
        <div className={c.banner}>
          <div className={c.banner_content}>
            <div className={c.textes}>
              <h1>Elevate Your Spirit with Victory Scented Fragrances!</h1>
              <p>
                Shop now and embrace the sweet smell of victory with Belle Aura.{" "}
              </p>
            </div>
            <button>Shop now</button>
          </div>
        </div>
      </div>
      <div className={c.space_image}></div>
      <div className={c.values}>
        <img src={valuesImage} alt="values" />
        <h3>Our Values</h3>
      </div>
      <BestSeller />

      <div className={c.sale}>
        <div className={c.sale_content}>
          <div className={c.textes}>
            <h1>Perfume Year-End Sale! Up to 50% OFF</h1>
            <p>
              Discover an exquisite collection of premium perfumes at
              unbelievable prices during our exclusive Perfume Sale!
            </p>
          </div>
          <button>Know more</button>
        </div>
        <img src={offSale} alt="offSale" />
      </div>
    </div>
  );
};

export default MainPage;
