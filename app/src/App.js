
import Nav from './components/Navbar/Nav';
import './App.css';
import Home from './components/Home/Home';
import Search from './components/Search/Search';


function App() {
  return (
    <div className="app">
      <Nav />
      <Home />
      <Search />
    </div>
  );
}

export default App;
