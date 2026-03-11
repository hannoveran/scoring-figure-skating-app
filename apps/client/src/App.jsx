import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Competitions from './pages/Competitions';
import Events from './pages/Events';
import StartOrderList from './pages/StartOrderList';
import Results from './pages/Results';
import './App.css';
import './styles/Global.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Competitions />} />
        <Route path="/events" element={<Events />} />
        <Route path="/startOrderList" element={<StartOrderList />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
