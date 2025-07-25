import './App.css'
import Navbar from './components/navbar';
import Home from './pages/Home';


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <div className="text-red-500 text-3xl font-bold">
      Hello Tailwind!
    </div>
    </div>
  )
}

export default App