import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Account from './pages/Account/Account';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className="App">
      <Router>
          <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/account" element={<Account />} />
        </Routes>
          <Footer />
    </Router>
    </div>
  );
}

export default App;

