import { Link } from 'react-router-dom';
import '../styles/Header.css';
import BurgerMenu from './BurgerMenu';
import { useAuth } from '../context/AuthContext';

function Header() {
  const { user } = useAuth();

  return (
    <header>
      <div className="logo-app-name">
        <Link to="/">
          <p>Суддівська платформа</p>
        </Link>
      </div>

      <BurgerMenu user={user} />
    </header>
  );
}

export default Header;
