import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Suspense } from 'react';
import { AnimationProvider } from './Components/Context';
const Home = lazy(() => import('./Components/Home'))
const Services = lazy(() => import('./Components/Services'))
const Project = lazy(() => import('./Components/Project'))
const ProjectInd = lazy(() => import('./Components/ProjectInd'))
const About = lazy(() => import('./Components/About'))

function App() {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    }, [])
  })
  return (
    <div className="App">
      <Suspense fallback="">
      <AnimationProvider>

        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/project" element={<Project />} />
          <Route path="/projectindu" element={<ProjectInd />} />
        </Routes>
        <Footer />
      </AnimationProvider>
      </Suspense>
    </div>

  );
}

export default App;
