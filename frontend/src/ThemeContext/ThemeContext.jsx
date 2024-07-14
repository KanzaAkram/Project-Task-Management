import React, { createContext, useEffect, useState } from "react";

export const AuthThemes = createContext();
const ThemeContext = ({ children }) => {
  const [themes, setthemes] = useState(() => {
    // Get the initial theme from localStorage or default to 'light'
    return localStorage.getItem("themeset") || "light";
  });

  useEffect(() => {
    localStorage.setItem("themeset", themes);
  }, [themes]);

  return (
    <div>
      <AuthThemes.Provider value={{ themes, setthemes }}>
        {children}
      </AuthThemes.Provider>
    </div>
  );
};

export default ThemeContext;
