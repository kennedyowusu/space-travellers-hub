import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Missions from './Components/Missions';
import Navigation from './Components/Navigation';

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
