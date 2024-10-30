import { NavLink } from 'react-router-dom';

function Header(){
  
  return (
    <header>
      <h1>Kandyce Mbua</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">About Me</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/resume">Resume</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;