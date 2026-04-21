import { Link } from 'react-router-dom';
import '../styles/Header.css';
import BurgerMenu from './BurgerMenu';

function Header() {
  return (
    <header>
      <div className="logo-app-name">
        <Link to="/">
          <p>Суддівська платформа</p>
        </Link>
      </div>

      <BurgerMenu />
    </header>
  );
}

export default Header;
