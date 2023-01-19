import './App.css';
// import { Header, Navigation, Project, Footer } from '../src/components'
import Header from '../src/components/Header'
import About from './components/About';
import Project from './components/Project';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
