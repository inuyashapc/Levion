import { Routes, Route } from "react-router-dom";
import LoginPage from "./Components/Login";
import RegisterPage from "./Components/Register";
import ForgotpasswordPage from "./Components/Forgotpassword";
import "./App.css";
//<LoginPage /> nó là react element
//LoginPage là react component
function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <a href="/">Login</a>
          </li>
          <li>
            <a href="/register">Register</a>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot" element={<ForgotpasswordPage />} />
      </Routes>
    </div>
  );
}

export default App;
