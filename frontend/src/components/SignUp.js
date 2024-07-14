import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext'; // Adjust the path as needed

const SignUp = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { setIsAuthenticated, setIsModalOpen } = useContext(AuthContext);

  const passwordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    const payload = { firstName: fname, lastName: lname, email, password };
    
    try {
      const response = await fetch('https://your-api-url/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        const data = await response.json();
        // Assuming the response contains a token or user info
        // Store the token/user info as needed

        setIsAuthenticated(true);
        setIsModalOpen(true);
        
        setFname("");
        setLname("");
        setEmail("");
        setPassword("");
      } else {
        // Handle errors
        console.error('Sign-up failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSignUp} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fname">
            First Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="fname"
            type="text"
            placeholder="Enter the First Name"
            value={fname}
            required
            onChange={(e) => setFname(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lname">
            Last Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lname"
            type="text"
            placeholder="Enter the Last Name"
            value={lname}
            required
            onChange={(e) => setLname(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter the Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter the Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={passwordVisibility}
              className="absolute inset-y-0 right-0 px-4 py-2 mt-2 focus:outline-none"
            >
              {showPassword ? (
                <svg
                  className="fill-current h-6 w-6 text-gray-700"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="heroicon-ui"
                    d="M12 17.27l-1.41-1.42L12 14.44l-8.59-8.59L3 4.73l9 9 9-9 1.41 1.41-10 10zm0-15.73L3.41 6.86 2 8.27l10 10 10-10-1.41-1.41-8.59 8.59z"
                  />
                </svg>
              ) : (
                <svg
                  className="fill-current h-6 w-6 text-gray-700"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="heroicon-ui"
                    d="M12 4a8 8 0 0 0-8 8c0 1.79.58 3.44 1.56 4.78.32.45.68.88 1.08 1.28l1.61-1.61c-.2-.27-.41-.55-.61-.83a5.93 5.93 0 0 1-.39-.57c-.05-.08-.09-.15-.13-.22a4 4 0 0 1-.69-2.16l-.02-.33H6a6 6 0 0 0 6 6h2v-2a8 8 0 0 1-8-8zm6.78 1.22l-1.42 1.42c.27.38.5.78.7 1.19l1.42-1.42a7.1 7.1 0 0 0-1.7-1.19zM12 20a8 8 0 0 0 8-8c0-1.79-.58-3.44-1.56-4.78-.32-.45-.68-.88-1.08-1.28l-1.61 1.61c.2.27.41.55.61.83.14.21.27.42.39.64.05.08.09.15.13.22.16.32.3.66.39 1.01l.02.33h1.59a6 6 0 0 0-6-6H12v2a8 8 0 0 1 8 8zm-3-4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
