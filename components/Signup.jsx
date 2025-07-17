import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    
    alert('Account created!');
  };

  return (
    
    <div className="flex justify-center items-center min-h-screen bg-gray-300 pt-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <img src="amazino_new.png" alt="Amazino Logo" className="mx-auto mb-2 w-32" />
        <h2 className="text-2xl font-bold mb-4 text-center">Create Your Amazino account</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 font-semibold">Enter your full name</label>
          <input
            type="text"
            className="w-full p-2 mb-4 border rounded"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            placeholder="First and last name"
          />
          <label className="block mb-2 font-semibold"> Enter your Mobile number</label>
          <input
            type="text"
            className="w-full p-2 mb-4 border rounded"
            value={mobile}
            onChange={e => setMobile(e.target.value)}
            required
            placeholder="Mobile number"
          />
          <label className="block mb-2 font-semibold"> Enter your Email (optional)</label>
          <input
            type="email"
            className="w-full p-2 mb-4 border rounded"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
          />
          <label className="block mb-2 font-semibold"> Create Password</label>
          <input
            type="password"
            className="w-full p-2 mb-2 border rounded"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            placeholder="At least 6 characters"
          />
          <p className="text-xs text-gray-600 mb-4">
            Passwords must be at least 6 characters.
          </p>
          <button
            type="submit"
            className="w-full bg-[#eb855d] text-black font-bold py-2 rounded hover:bg-yellow-500"
          >
            Submit
          </button>
        </form>
        <p className="text-xs mt-4 text-gray-600">
          By creating an account, you agree to Amazino's Conditions of Use and Privacy Notice.
        </p>
        <hr className="my-6" />
        <p className="text-sm text-center">
          Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup ;