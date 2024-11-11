import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("❤️ by Poov")}
        </p>
        // <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
        //   Website theme available on {" "}
        //   <a
        //     href="https://github.com/poov9797"
        //     target="_blank"
        //     rel="noreferrer"
        //   >
        //     MyGitHub
        //   </a>
        // </p>
      </div>
    </Fade>
  );
}
