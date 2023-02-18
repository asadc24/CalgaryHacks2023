import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import login_page from "./pages/login_page"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<login_page />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
