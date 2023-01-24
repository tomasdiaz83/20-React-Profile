import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from '../src/components/Header'
import Footer from './components/Footer';

import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
        <div>
          <Header />
          <div>
            <Routes>
              <Route
                path="/"
                element={<About />}
              />
              <Route
              path="/projects"
              element={<Project />}
              />
              <Route
                path="/contact"
                element={<Contact />}
              />
            </Routes>
          </div>
          <Footer />
        </div>
    </div>
  );
}

export default App;
