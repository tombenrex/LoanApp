import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/main/Home';
import LoanForm from './components/form/LoanForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/loan' element={<LoanForm />} />
      </Routes>
    </Router>
  );
}

export default App;
