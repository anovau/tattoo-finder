import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/Authcontext';

function Login() {
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
      setLoading(false);
      navigate("/");
    } catch (error) {
      setLoading(false);
      setError("Wrong Credentials");
      setTimeout(() => setError(""), 1500);
    }
  };

  return (
      <div className="card-container">
    <div className="card">
      <div className="card-header">
        {error && <p className="error">{error}</p>}
        <h1>Log In</h1>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" onChange={handleEmail}  required/>
          <input type="password" placeholder="Password" onChange={handlePassword} required/>
          <input type="submit" value="Log In" />
        </form>
        {loading && (
          <svg class="spinner" viewBox="0 0 50 50">
            <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
          </svg>
        )}
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>{" "}
        </p>
      </div>
    </div>
    </div>
  );
}

export default Login;
