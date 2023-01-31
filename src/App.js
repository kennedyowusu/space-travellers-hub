import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Missions from './components/Missions';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/missions" element={<Missions />} />
      </Routes>
    </Router>
  );
}

export default App;
