
import './App.css';
import { Link, Route, Routes, BrowserRouter as Router} from "react-router-dom"
import HomePage from './HomePage/HomePage';
import ContactPage from './ContactPage/ContactPage';
import Characters from './Characters/Characters';



function App() {


  return (
    <Router>
    <div className="App-header">
      <header >
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/characters">Characters</Link>
      </header>
      

      <Routes>
      <Route path='/' element={<HomePage></HomePage>} />
      <Route path='/contact' element={<ContactPage></ContactPage>} />
      <Route path='/characters' element={<Characters></Characters>} />

      </Routes>
    </div>
    </Router>
  );
}

export default App;
