import { Link } from 'react-router-dom';
import Competition from '../components/Competition';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Competitions.css';

function Competitions() {
  return (
    <div className="competition-page">
      <Header />
      <main>
        <h1>Оберіть змагання</h1>

        <div className="competitions">
          <Competition />
          <Competition />
          <Competition />
          <Competition />
          <Competition />
          <Competition />
          <Competition />
          <Competition />
          <Competition />
          <Competition />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Competitions;
