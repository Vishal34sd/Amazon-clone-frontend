import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    
    alert('Login submitted!');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-300">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <img src="amazino_new.png" alt="Amazino Logo" className="mx-auto mb-6 w-32" />
        <h2 className="text-2xl font-bold mb-4 text-center">Welcome Back to Amazino ! 🎉🥳</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 font-semibold">Email or mobile number </label>
          <input
            type="text"
            className="w-full p-2 mb-4 border rounded"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <label className="block mb-2 font-semibold">Enter Password</label>
          <input
            type="password"
            className="w-full p-2 mb-4 border rounded"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-[#eb855d] text-black font-bold py-2 rounded hover:bg-yellow-500"
          >
            Sign in
          </button>
        </form>
        <p className="text-xs mt-4 text-gray-600">
          By continuing, you agree to Amazino's Conditions of Use and Privacy Notice.
        </p>
        <hr className="my-6" />
        <Link to ="/signup"><button className="w-full bg-gray-200 py-2 rounded font-semibold hover:bg-gray-300">
          Create your Amazino account
        </button></Link>
      </div>
    </div>
  );
};

export default Login;