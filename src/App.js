import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DesignList from './components/pages/DesignList';
import Footer from './components/footer';
import BookUs from './components/pages/BookUs';
import Prices from './components/pages/Prices';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="designs" exact element={<DesignList />} />
          <Route path="bookUs" exact element={<BookUs />} />
          <Route path="prices" exact element={<Prices />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
