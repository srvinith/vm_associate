import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Services from './Components/Services';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Services />} />
      </Routes>
      <Footer/>
    </div>
    
  );
}

export default App;
