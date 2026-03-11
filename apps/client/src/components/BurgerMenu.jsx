import { useState } from 'react';
import '../styles/BurgerMenu.css';

function BurgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="burger-menu">
      <button className="burger-button" onClick={() => setOpen(!open)}>
        ☰
      </button>

      <div className={`menu-content ${open ? 'open' : ''}`}>
        <button className="button-secondary">Night</button>
        <div className="role">Суддя №5</div>
        <button className="button-secondary">Вийти</button>
      </div>
    </div>
  );
}

export default BurgerMenu;
