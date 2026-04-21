import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo-app-name">
        <Link to="/">
          <div className="logo">
            <img src="/snowflake.png" alt="" />
          </div>

          <p>IceScore</p>
        </Link>
      </div>

      <div className="dashboard-links">
        <Link to="/">Dashboard</Link>
        <Link to="/competitions">Competitions</Link>
        <Link to="/results">Results</Link>
      </div>
    </div>
  );
}

export default Sidebar;
