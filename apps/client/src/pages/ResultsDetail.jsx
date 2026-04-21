import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import '../styles/Results.css';

function ResultsDetail() {
  const { id } = useParams();

  const [competition, setCompetition] = useState(null);
  const [results, setResults] = useState([]);

  useEffect(() => {
    setCompetition({
      name: 'World Championship 2026',
      category: "Women's Singles",
      segment: 'Short Program',
    });

    setResults([
      {
        place: 1,
        name: 'Kaori Sakamoto',
        country: 'Japan',
        tes: 42.33,
        pcs: 34.1,
        total: 76.43,
      },
      {
        place: 2,
        name: 'Isabeau Levito',
        country: 'USA',
        tes: 40.21,
        pcs: 33.5,
        total: 73.71,
      },
    ]);
  }, [id]);

  return (
    <div className="results-page">
      <Header />

      <main>
        <Link to="/results">← Back</Link>

        <div className="results-header shadow-lg">
          <h1>{competition?.name}</h1>
          <p>
            {competition?.category} · {competition?.segment}
          </p>
        </div>

        <div className="results-table shadow-md">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Skater</th>
                <th>Country</th>
                <th>TES</th>
                <th>PCS</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              {results.map((r) => (
                <tr key={r.place}>
                  <td>{r.place}</td>
                  <td>
                    <strong>{r.name}</strong>
                  </td>
                  <td>{r.country}</td>
                  <td>{r.tes.toFixed(2)}</td>
                  <td>{r.pcs.toFixed(2)}</td>
                  <td>
                    <strong>{r.total.toFixed(2)}</strong>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default ResultsDetail;
