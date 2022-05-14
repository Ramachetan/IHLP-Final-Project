import React from "react";
import { HeartTwoTone } from "@ant-design/icons";
import "./Header.css";

const Header = () => {
  return (
    <Header className="header">
      Made with <HeartTwoTone twoToneColor="#eb2f96" /> By{" "}
      <a
        className="footer__link"
        href="https://github.com/Ramachetan/IHLP-Final-Project"
        target="_blank"
        style={{ color: "#fdfdfd" }}
        rel="noreferrer"
      >
        Internet and Higher Layer Protocol Final Project
      </a>
    </Header>
  );
};

export default Header;
