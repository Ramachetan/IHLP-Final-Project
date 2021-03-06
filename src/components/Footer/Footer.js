import React from "react";
import { HeartTwoTone } from "@ant-design/icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      Made with <HeartTwoTone twoToneColor="#eb2f96" /> By{" "}
      <a
        className="footer__link"
        href="https://github.com/Ramachetan/IHLP-Final-Project"
        target="_blank"
        style={{ color: "#fdfdfd" }}
        rel="noreferrer"
      >
        Rama Chetan Atmudi, Abhinav Ramagiri, M. Sai Venkata Vivek Sagar Reddy
      </a>
    </footer>
  );
};

export default Footer;
