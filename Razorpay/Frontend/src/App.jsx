
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Card from "./card";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Card />} />
      </Routes>
    </Router>
  );
}

export default App;
