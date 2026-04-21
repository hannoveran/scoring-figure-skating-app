import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/Results.css';

function Results() {
  const [competitions, setCompetitions] = useState([]);

  useEffect(() => {
    setCompetitions([
      {
        id: 1,
        name: 'World Championship 2026',
        category: "Women's Singles",
        segment: 'Short Program',
        date: 'March 15, 2026',
      },
      {
        id: 2,
        name: 'World Championship 2026',
        category: "Men's Singles",
        segment: 'Free Skate',
        date: 'March 20, 2026',
      },
    ]);
  }, []);

  return (
    <div className="results-page">
      <Header />

      <main>
        <h1>Results</h1>

        <div className="results-list">
          {competitions.map((c) => (
            <Link
              key={c.id}
              to={`/results/${c.id}`}
              className="result-card shadow-md"
            >
              <h3>{c.name}</h3>
              <p>{c.category}</p>
              <p>{c.segment}</p>
              <span>{c.date}</span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Results;
