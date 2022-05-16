import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Page404 from './pages/page404/Page404';
import HomePage from './pages/homepage/HomePage';
import CartPage from './pages/cartpage/CartPage';

const App = () => (
  <div className="App">
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  </div>
);

export default App;
