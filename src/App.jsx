import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline, createTheme, ThemeProvider } from '@mui/material';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Practice from './pages/Practice';
import Resources from './pages/Resources';
import Profile from './pages/Profile';

export default function App() {
  // Theme mode demonstrates useState and toggling between light/dark.
  const [darkMode, setDarkMode] = useState(false);

  const muiTheme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#4f46e5'
      }
    }
  });

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <div className={`min-h-screen ${darkMode ? 'bg-slate-900' : 'bg-slate-50'}`}>
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="pt-20 px-4 sm:px-6 lg:px-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
}