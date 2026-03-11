import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer>
      <div>
        <Link to="/">
          <p>Суддівська платформа</p>
        </Link>
      </div>

      <div className="footer-buttons">
        <button className="button-secondary">About</button>
        <button className="button-secondary">Privacy</button>
      </div>
    </footer>
  );
}

export default Footer;
