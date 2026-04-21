import { useEffect, useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/ScoreEntry.css';

function ScoreEntry() {
  const { id } = useParams();

  const [performance, setPerformance] = useState(null);

  const [elements, setElements] = useState([]);
  const [pcs, setPcs] = useState({
    skating_skills: 0,
    transitions: 0,
    performance: 0,
    composition: 0,
    interpretation: 0,
  });

  const [deductions, setDeductions] = useState(0);

  useEffect(() => {
    setPerformance({
      skater: 'Kaori Sakamoto',
      country: 'Japan',
      order: 1,
      pcsFactor: 0.8,
    });

    setElements([
      { name: '3Lz', base: 5.9, goe: 0 },
      { name: '2A', base: 3.3, goe: 0 },
    ]);
  }, [id]);

  useEffect(() => {
    const mockPerformance = {
      id,
      skater: 'Kaori Sakamoto',
      country: 'Japan',
      order: 1,

      competition: {
        id: 1,
        name: 'World Championship 2026',
        segment: 'Short Program',
      },

      pcsFactor: 0.8,
    };

    setPerformance(mockPerformance);
  }, [id]);

  const updateGOE = (index, value) => {
    const updated = [...elements];
    updated[index].goe = Number(value);
    setElements(updated);
  };

  const updatePCS = (key, value) => {
    setPcs({ ...pcs, [key]: Number(value) });
  };

  const tes = useMemo(() => {
    return elements.reduce((sum, el) => {
      const goeFactor = 1 + el.goe * 0.1;
      const score = el.base * goeFactor;
      return sum + score;
    }, 0);
  }, [elements]);

  const pcsSum = useMemo(() => {
    return Object.values(pcs).reduce((a, b) => a + b, 0);
  }, [pcs]);

  const totalPCS = pcsSum * (performance?.pcsFactor || 1);

  const total = tes + totalPCS - deductions;

  return (
    <div>
      <Header />

      <main className="score-page">
        <Link to="/competitions">← Back</Link>

        {/* HEADER */}
        <div className="score-header shadow-lg">
          <div>
            <h1>{performance?.skater}</h1>

            <p>
              {performance?.country} · #{performance?.order}
            </p>

            <p>
              {performance?.competition?.name} ·{' '}
              {performance?.competition?.segment}
            </p>
          </div>
        </div>

        {/* TOTALS */}
        <div className="score-summary">
          <div className="shadow-md box">
            <p>TES</p>
            <h2>{tes.toFixed(2)}</h2>
          </div>

          <div className="shadow-md box">
            <p>PCS</p>
            <h2>{totalPCS.toFixed(2)}</h2>
          </div>

          <div className="shadow-md box">
            <p>Deductions</p>
            <h2>-{deductions}</h2>
          </div>

          <div className="shadow-md box dark">
            <p>Total</p>
            <h2>{total.toFixed(2)}</h2>
          </div>
        </div>

        {/* TES */}
        <div className="section shadow-md">
          <h2>Technical Elements</h2>

          {elements.map((el, i) => (
            <div key={i} className="element-row">
              <span>{i + 1}</span>
              <span>{el.name}</span>
              <span>{el.base}</span>

              <div className="goe-buttons">
                {[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5].map((val) => (
                  <button
                    key={val}
                    className={`goe-btn ${el.goe === val ? 'active' : ''} ${val > 0 ? 'pos' : val < 0 ? 'neg' : ''}`}
                    onClick={() => updateGOE(i, val)}
                  >
                    {val}
                  </button>
                ))}
              </div>

              <span>{(el.base * (1 + el.goe * 0.1)).toFixed(2)}</span>
            </div>
          ))}
        </div>

        {/* PCS */}
        <div className="section shadow-md">
          <h2>Program Components</h2>

          {Object.keys(pcs).map((key) => (
            <div className="pcs-row">
              <span>{key.replace('_', ' ')}</span>

              <input
                type="range"
                min="0"
                max="10"
                step="0.25"
                value={pcs[key]}
                onChange={(e) => updatePCS(key, e.target.value)}
              />

              <span>{pcs[key].toFixed(2)}</span>
            </div>
          ))}
        </div>

        {/* DEDUCTIONS */}
        <div className="section shadow-md">
          <h2>Deductions</h2>

          <input
            type="number"
            step="0.5"
            value={deductions}
            onChange={(e) => setDeductions(Number(e.target.value))}
          />
        </div>
      </main>
    </div>
  );
}

export default ScoreEntry;
