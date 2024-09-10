import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/logo.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookBookmark, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
  <div className='nav-bar'>
    <Link className='logo' to='/'>
      <img src={LogoS} alt="logo" />
      <img className='sub-logo' src={LogoSubtitle} alt="slobodan" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/" className="nav-home">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink exact="true" activeclassname="active" to="/about" className="nav-about">
        <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
      </NavLink>
      <NavLink exact="true" activeclassname="active" to="/experience" className="nav-experience">
        <FontAwesomeIcon icon={faBookBookmark} color='#4d4d4e' />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a target="_blank" rel="noreferrer" href="https://github.com/jixokiki">
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a>
          <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/rizky-maulana-920343218'>
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
);

export default Sidebar;
