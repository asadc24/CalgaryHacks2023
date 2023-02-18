import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import login_page from "./pages/login_page"
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App'>
      <Router>
        <div className='content'>
          <Routes>
            <Route exact path='/' element={<HomePage/>} />
          </Routes>
        </div>
      </Router>
    </div>

  );
}

export default App;
