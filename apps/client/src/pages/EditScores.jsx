import { Link } from 'react-router-dom';
import Header from '../components/Header';
//import '.styles/Events.css';

function EditScores() {
  return (
    <div className="edit-scrores-page">
      <Header />
      <main>
        <h1>Ім'я Прізвище</h1>
        <h3>Назва змагання - програма</h3>
      </main>
    </div>
  );
}

export default EditScores;
