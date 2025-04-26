import React from "react";
import styles from "./Footer.module.scss";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <div className={styles.brand}>Belle Aura</div>
        <div className={styles.links}>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
        </div>
      </div>
      <div className={styles.copyright}>
        © {new Date().getFullYear()} Belle Aura. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
