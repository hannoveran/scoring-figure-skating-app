import { useState } from 'react';
import api from '../api/axios';
import '../styles/Auth.css';

function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await api.post('/auth/register', form);
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card shadow-lg">
        <h1>Register</h1>

        <form onSubmit={handleSubmit} className="auth-form">
          <input
            name="name"
            placeholder="Name"
            onChange={handleChange}
            className="auth-input"
          />

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

          <input
            name="passwordConfirmation"
            type="password"
            placeholder="Confirm password"
            onChange={handleChange}
            className="auth-input"
          />

          <button className="auth-button">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
