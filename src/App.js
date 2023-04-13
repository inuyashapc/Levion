import { Routes, Route, Link } from "react-router-dom";
import LoginPage from "./Components/Login";
import RegisterPage from "./Components/Register";
import ForgotpasswordPage from "./Components/Forgotpassword";
import "./App.css";
//<LoginPage /> nó là react element
//LoginPage là react component
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot" element={<ForgotpasswordPage />} />
      </Routes>
    </div>
  );
}

export default App;
