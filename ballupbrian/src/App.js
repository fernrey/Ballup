import './App.css';
import Navbar from './Components/Navbar';
import Event from './Components/Event';
import Contact from './Components/Contact';
import Home from './Components/Home';

import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/events" element={<Event />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
