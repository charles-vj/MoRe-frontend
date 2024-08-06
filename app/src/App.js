import Nav from './components/Navbar/Nav'
import './App.css'
import Home from './components/Home/Home'
import Search from './components/Search/Search'
import Trending from './components/Search/Trending'
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/trending" element={<Trending />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
