import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Placements from './pages/Placements';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/placements" element={<Placements />} />
    </Routes>
  );
}

export default App;
