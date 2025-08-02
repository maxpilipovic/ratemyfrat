import './App.css'
import Navbar from './components/navbar';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Blog from './pages/Blog';
import Footer from './components/States/Footer'
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import ListSchool from './pages/ListSchool';
import AllSchools from './pages/AllSchools';
import AddSchool from './pages/AddSchool';
import About from './pages/About';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/list-frat" element={<ListFrat />} />
        <Route path="/list-school" element={<ListSchool />} />
        <Route path="/schools" element={<AllSchools />} />
        <Route path="/add-school" element={<AddSchool />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App