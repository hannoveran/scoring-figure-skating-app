import { Link } from 'react-router-dom';
import '../styles/Competitions.css';

function Competition({ comp }) {
  return (
    <Link to={`/competition/${comp.id}`} className="competition shadow-md">
      <div className="competition-card">
        <div className="name-status">
          <h3 className="competition-name">{comp.name}</h3>
          <div className={`competition-status ${comp.status}`}>
            {comp.status.replace('_', ' ')}
          </div>
        </div>

        <div className="location-dates">
          <p>{comp.location}</p>
          <p>{comp.date}</p>
        </div>

        <div className="tags">
          <div className="tag">
            {comp.category === 'men_single'
              ? "Men's Singles"
              : "Women's Singles"}
          </div>

          <div className="tag">
            {comp.segment === 'short_program' ? 'Short Program' : 'Free Skate'}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Competition;
