import { NavLink } from 'react-router-dom';

function Header(){
  
  return (
    <header>
      <h1>Kandyce Mbua</h1>
      <nav>
        <ul>
        <li>
        <NavLink to="/">About Me</NavLink>
        </li> 
        <li>
        <NavLink to="/portfolio">Portfolio</NavLink>
        </li> 
        <li>
        <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
        <NavLink to="/resume">Resume</NavLink>
          </li> 
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;