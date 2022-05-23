import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/Authcontext';


const Signup = () => {
  const { signup } = useAuth();

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmail = e => setEmail(e.target.value);
  const handlePassword = e => setPassword(e.target.value);
  const handleConfirmPassword = e => setConfirmPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setTimeout(() => setError(''), 1500);
    } else {
      try {
        await signup(email, password);
        navigate('/');
      } catch (error) {
        setError('Wrong Credentials');
        setTimeout(() => setError(''), 1500);
        console.log(password, confirmPassword);
      }
    }
    setLoading(false);
  }

  return (
      <div className="card-container">
    <div className='card'>
      <div className='card-header' >
        {error && <p className='error' >{error}</p>}
        <h1>Sign Up</h1>
      </div>
      <div className='card-body'>
        <form onSubmit={handleSubmit} >
          <input type='email' placeholder='Email' onChange={handleEmail} required />
          <input type='password' placeholder='Password' onChange={handlePassword} required />
          <input type='password' placeholder='Confirm Password' onChange={handleConfirmPassword} required />
          <input type='submit' value='Sign Up' />
        </form>
        {loading && <svg class="spinner" viewBox="0 0 50 50">
            <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
                    </svg>}
        <p>Do you already have an account? <Link to='/login'>Login</Link> </p>
      </div>
    </div>
    </div>
  )
}

export default Signup;