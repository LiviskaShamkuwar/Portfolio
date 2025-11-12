import React from "react";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Liviska Shamkuwar</h3>
        <p>Frontend Developer | React Enthusiast</p>

        <div className="social-links">
          <a
            href="https://linkedin.com/in/liviska"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/liviska"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a href="mailto:liviska@example.com">Email</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Liviska Shamkuwar | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
