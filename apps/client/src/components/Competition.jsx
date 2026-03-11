import { Link } from 'react-router-dom';
import '../styles/Competitions.css';

function Competition() {
  return (
    <div className="competition">
      <Link to="/events">
        <button>
          <div className="name-status">
            <h3 className="competition-name">Чемпіонат світу 2026</h3>
            <div className="competition-status">Завершено</div>
          </div>

          <div className="location-dates">
            <p className="competition-location">Канада</p>
            <div className="competition-dates">Березень 23-29, 2026</div>
          </div>
        </button>
      </Link>
    </div>
  );
}

export default Competition;
