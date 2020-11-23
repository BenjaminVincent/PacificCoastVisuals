import './styles/App.css';
import Navbar from './components/Navbar';
import NavLink from './components/NavLink';
import Landing from './components/Landing';
import About from './components/About';
import Work from './components/Work';
// import Contact from './components/Contact';

function App() {
  return (
    <div className='app-container'>
      <Navbar />
      <NavLink />
      <Landing />
      <About />
      <Work />
    </div>
  );
}

export default App;
