import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/StartOrderList.css';

function StartOrderList() {
  return (
    <div className="start-order-list-page">
      <Header />
      <main>
        <h1>Назва змагання - програма</h1>

        <div className="start-order-list-table">
          <table>
            <thead>
              <tr>
                <th>Номер №</th>

                <th>Ім'я</th>

                <th>Країна</th>

                <th>Статус</th>

                <th>Виставти бали</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Каорі Сакамото</td>
                <td>Японія</td>
                <td>Виставлено</td>
                <td>Змінити оцінку</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default StartOrderList;
