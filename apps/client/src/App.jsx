import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Dashboard from './pages/Dashboard';
import Competitions from './pages/Competitions';
import ScoreEntry from './pages/ScoreEntry';
import StartOrderList from './pages/StartOrderList';
import Results from './pages/Results';
import ResultsDetail from './pages/ResultsDetail';
import './styles/Global.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* головна сторінка */}
          <Route index element={<Dashboard />} />

          {/* інші сторінки */}
          <Route path="competitions" element={<Competitions />} />
          <Route path="competition/:id" element={<StartOrderList />} />
          <Route path="score/:id" element={<ScoreEntry />} />
          <Route path="/results" element={<Results />} />
          <Route path="/results/:id" element={<ResultsDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
