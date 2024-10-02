
import './App.scss';
import Home from "./Pages/home.jsx"
import Privacy from './Section/privacy/Privacy.jsx';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<Privacy />} />
      </Routes>
    </Router>
  );
}

export default App;