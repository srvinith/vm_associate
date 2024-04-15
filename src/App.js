import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Services from './Components/Services';
import Project from './Components/Project';
import ProjectInd from './Components/ProjectInd';
import About from './Components/About';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/project" element={<Project />} />
        <Route path="/projectindu" element={<ProjectInd />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
