import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ForgetPassword from './components/ForgetPassword';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/logIn" element={<Login/>} />
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="/forgetpassword" element={<ForgetPassword/>} />
      </Routes>
    </div>
  );
}

export default App;
