import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Missions from './Pages/Missions';
import Rockets from './Pages/Rockets';
import Profile from './Pages/Profile';
import Layout from './appLayout/applayout';

function App() {
  return (
    <Router>
      <Layout />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
