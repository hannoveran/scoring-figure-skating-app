import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../styles/Dashboard.css';
import Header from '../components/Header.jsx';

function Dashboard() {
  const [competitions, setCompetitions] = useState([]);
  const [skaters, setSkaters] = useState([]);
  const [performances, setPerformances] = useState([]);

  useEffect(() => {
    // тут потім підключиш свій бекенд
    // зараз мок-дані
    setCompetitions([
      {
        id: 1,
        name: 'World Championship 2026',
        date: '2026-03-15',
        location: 'Boston, USA',
        category: 'men_single',
        status: 'in_progress',
      },
      {
        id: 2,
        name: 'World Championship 2026',
        date: '2026-03-20',
        location: 'Boston, USA',
        category: 'women_single',
        status: 'upcoming',
      },
    ]);

    setSkaters(new Array(23));
    setPerformances([
      { status: 'scored', total_score: 85 },
      { status: 'reviewed', total_score: 90 },
    ]);
  }, []);

  const scoredPerformances = performances.filter(
    (p) => p.status === 'scored' || p.status === 'reviewed',
  );

  const avgScore =
    scoredPerformances.length > 0
      ? (
          scoredPerformances.reduce((sum, p) => sum + (p.total_score || 0), 0) /
          scoredPerformances.length
        ).toFixed(1)
      : '—';

  return (
    <div>
      <Header />

      <h1>Dashboard</h1>
      <h3>Overview of judging activity</h3>
      <hr />

      {/* STATS */}
      <div className="overview">
        <div className="shadow-md stat-card teal">
          <h2>Competitions</h2>
          <p>{competitions.length}</p>
        </div>

        <div className="shadow-md stat-card pink">
          <h2>Skaters</h2>
          <p>{skaters.length}</p>
        </div>

        <div className="shadow-md stat-card blue">
          <h2>Scores Entered</h2>
          <p>{scoredPerformances.length}</p>
        </div>

        <div className="shadow-md stat-card dark">
          <h2>Avg Score</h2>
          <p>{avgScore}</p>
        </div>
      </div>

      {/* RECENT COMPETITIONS */}
      <div className="recent-competitions shadow-lg">
        <div id="recent-competitions-headline">
          <h2>Recent Competitions</h2>
          <Link to="/Competitions">View all →</Link>
        </div>

        <div id="recent-competitions-info">
          {competitions.length === 0 ? (
            <div className="empty">
              <p>No competitions yet</p>
            </div>
          ) : (
            competitions.slice(0, 5).map((comp, i) => (
              <Link
                key={comp.id}
                to={`/CompetitionDetail?id=${comp.id}`}
                className="competition-row"
              >
                <div className="competition-left">
                  <div className="competition-index">{i + 1}</div>

                  <div>
                    <h4>{comp.name}</h4>
                    <p>{comp.date}</p>
                    <p>{comp.location}</p>
                  </div>
                </div>

                <div className="competition-right">
                  <div className="tag">
                    {comp.category === 'men_single'
                      ? "Men's Singles"
                      : "Women's Singles"}
                  </div>

                  <div className={`tag status ${comp.status}`}>
                    {comp.status.replace('_', ' ')}
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
