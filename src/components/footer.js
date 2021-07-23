/** @format */

import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="list-item1">
        <ul>
          <li>
            Facebook <i className="fab fa-facebook"></i>
          </li>
          <li>
            Instgram <i className="fab fa-instagram"></i>
          </li>
          <li>
            Github <i className="fab fa-github"></i>
          </li>
        </ul>
      </div>
      <div className="list-item2">
        <ul>
          <li>
            Information <i className="fas fa-info"></i>
          </li>
          <li>
            Location <i className="fas fa-map-marker-alt"></i>
          </li>
          <li>
            Help <i className="far fa-question-circle"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
