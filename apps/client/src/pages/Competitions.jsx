import { useEffect, useState } from 'react';
import Competition from '../components/Competition';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CreateCompetitionModal from '../components/CreateCompetitionModal';
import '../styles/Competitions.css';

function Competitions() {
  const [competitions, setCompetitions] = useState([]);
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    name: '',
    date: '',
    location: '',
    category: 'men_single',
    segment: 'short_program',
    status: 'upcoming',
  });

  useEffect(() => {
    setCompetitions([
      {
        id: 1,
        name: 'World Championship 2026',
        date: '2026-03-15',
        location: 'Boston, USA',
        category: 'men_single',
        segment: 'short_program',
        status: 'in_progress',
      },
      {
        id: 2,
        name: 'World Championship 2026',
        date: '2026-03-20',
        location: 'Boston, USA',
        category: 'women_single',
        segment: 'free_skate',
        status: 'upcoming',
      },
    ]);
  }, []);

  const handleCreate = () => {
    setCompetitions([{ ...form, id: Date.now() }, ...competitions]);

    setForm({
      name: '',
      date: '',
      location: '',
      category: 'men_single',
      segment: 'short_program',
      status: 'upcoming',
    });

    setOpen(false);
  };

  const filtered = competitions.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="competition-page">
      <Header />

      <main>
        <div className="competitions-header">
          <div>
            <h1>Competitions</h1>
            <p>Manage skating events</p>
          </div>

          <button
            className="btn-primary shadow-md"
            onClick={() => setOpen(true)}
          >
            + New Competition
          </button>
        </div>

        <input
          className="search-input shadow-sm"
          placeholder="Search competitions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="competitions">
          {filtered.map((comp) => (
            <Competition key={comp.id} comp={comp} />
          ))}
        </div>
      </main>

      <CreateCompetitionModal
        open={open}
        onClose={() => setOpen(false)}
        onCreate={handleCreate}
        form={form}
        setForm={setForm}
      />

      <Footer />
    </div>
  );
}

export default Competitions;
