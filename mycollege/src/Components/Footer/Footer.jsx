import './Footer.css';
import React, { useEffect, useState } from 'react';

const Footer = ({ footerAPI: { titles, links } }) => {
  const [Year, setYear] = useState();
  
  useEffect(() => {
      const getYear = () => setYear(new Date().getFullYear());
      getYear();
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {titles.map((val, i) => (
            <div key={i} className="footer-title">
              <h1>{val.title}</h1>
            </div>
          ))}
          {links.map((list, i) => (
            <ul key={i} className="footer-links">
              {list.map((link, i) => (
                <li key={i}>{link.link}</li>
              ))}
            </ul>
          ))}
        </div>
        <div className="footer-copyright">
          <p>© 2024 <strong>Aman Pandey.</strong> All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
