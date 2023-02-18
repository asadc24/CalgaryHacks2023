import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import login_page from "./pages/LoginPage"
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <div className='App'>
      <Router>
        <div className='content'>
          <Routes>
            <Route exact path='/' element={<LoginPage/>} />
            <Route exact path='/signup' element={<SignupPage/>} />
            <Route exact path='/home' element={<HomePage/>} />
          </Routes>
        </div>
      </Router>
    </div>

  );
}

export default App;
