import React, { useState } from 'react';

const Form = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername('');
    setPassword('');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mx-auto max-w-sm">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="email"
            placeholder="Enter the Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
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
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
