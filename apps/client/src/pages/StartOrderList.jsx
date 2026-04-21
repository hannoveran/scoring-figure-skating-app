import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/StartOrderList.css';

function StartOrderList() {
  const { id } = useParams();
  const [competition, setCompetition] = useState(null);
  const [performances, setPerformances] = useState([]);

  useEffect(() => {
    setCompetition({
      name: 'World Championship 2026',
      date: 'March 15, 2026',
      location: 'Boston, USA',
      category: "Women's Singles",
      segment: 'Short Program',
      status: 'in_progress',
    });

    setPerformances([
      {
        id: 1,
        order: 1,
        name: 'Kaori Sakamoto',
        country: 'Japan',
        status: 'scored',
        total: 85.32,
      },
      {
        id: 2,
        order: 2,
        name: 'Isabeau Levito',
        country: 'USA',
        status: 'pending',
        total: null,
      },
    ]);
  }, [id]);

  return (
    <div className="start-order-list-page">
      <Header />

      <main>
        {/* HEADER */}
        <div className="competition-header shadow-lg">
          <div>
            <h1>{competition?.name}</h1>
            <p>
              {competition?.date} · {competition?.location}
            </p>
            <p>
              {competition?.category} · {competition?.segment}
            </p>
          </div>

          <div className={`status ${competition?.status}`}>
            {competition?.status?.replace('_', ' ')}
          </div>
        </div>

        {/* TABLE */}
        <div className="start-order-wrapper shadow-md">
          <div className="table-head">
            <h2>Start Order</h2>
          </div>

          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Skater</th>
                <th>Country</th>
                <th>Status</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {performances.map((p) => (
                <tr key={p.id}>
                  <td>{p.order}</td>

                  <td>
                    <strong>{p.name}</strong>
                  </td>

                  <td>{p.country}</td>

                  <td>
                    <span className={`tag status ${p.status}`}>{p.status}</span>
                  </td>

                  <td>{p.total ? p.total : '—'}</td>

                  <td>
                    <Link to={`/score/${p.id}`} className="score-link">
                      {p.status === 'pending' ? 'Enter score' : 'Edit'}
                    </Link>
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

export default StartOrderList;
