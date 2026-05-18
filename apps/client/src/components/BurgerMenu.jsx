import { useState } from 'react';
import '../styles/BurgerMenu.css';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

function BurgerMenu() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <div className="burger-menu">
      <button className="burger-button" onClick={() => setOpen(!open)}>
        ☰
      </button>

      <div className={`menu-content ${open ? 'open' : ''}`}>
        {user ? (
          <>
            <div className="role">
              {user.name} ({user.role})
            </div>

            <button className="button-secondary" onClick={logout}>
              Вийти
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="button-secondary">Увійти</button>
            </Link>

            <Link to="/register">
              <button className="button-secondary">Реєстрація</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default BurgerMenu;
