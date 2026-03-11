import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/Events.css';

function Events() {
  return (
    <div className="events-page">
      <Header />
      <main>
        <h1>Оберіть категорію</h1>

        <div className="events-container">
          <div className="gender">
            <button className="button-secondary">Жінки</button>
            <button className="button-secondary">Чоловіки</button>
          </div>

          <div className="program">
            <button className="button-secondary">Коротка</button>
            <button className="button-secondary">Довільна</button>
          </div>

          <Link to="/startOrderList" className="button-primary">
            Виставити бали
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Events;
