import { useState } from 'react';
import api from '../api/axios';
import { useAuth } from '../context/AuthContext';
import '../styles/Auth.css';

function Login() {
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await api.post('/auth/login', form);

    login(res.data);
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card shadow-lg">
        <h1>Login</h1>

        <form onSubmit={handleSubmit} className="auth-form">
          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="auth-input"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            className="auth-input"
          />

          <button className="auth-button">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
