import "./Navbar.css";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);

  function toggleMenu () {
    setIsMobileMenuShown((prev) => !prev);
  }

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img
        src={logo}
        alt="Logo"
        className={`logo ${sticky ? "dark-logo" : ""}`}
      />
      <ul className={isMobileMenuShown ? '' : 'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={-300} duration={900}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-300} duration={900}>Programs</Link></li>
        <li><Link to='about' smooth={true} offset={-200} duration={900}>About us</Link></li>
        <li><Link to='campus' smooth={true} offset={-300} duration={900}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-300} duration={900}>Testimonials</Link></li>
        <li>
          <Link to='contact' smooth={true} offset={-230} duration={900} className="btn">Contact us</Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu}/>
    </nav>
  );
};

export default Navbar;
