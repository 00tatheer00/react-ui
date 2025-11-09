import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Switch, Avatar, Button } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

export default function NavBar({ darkMode, setDarkMode }) {
  return (
    <AppBar position="fixed" color="transparent" elevation={0} sx={{ backdropFilter: 'blur(6px)' }}>
      <Toolbar className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <div className="flex items-center space-x-2">
            <Avatar sx={{ bgcolor: 'primary.main' }}>S</Avatar>
            <div>
              <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
                StudentPractice
              </Typography>
              <Typography variant="caption" component="div" className="text-slate-500">
                Learn by doing
              </Typography>
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-4">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-primary font-semibold' : 'text-slate-600'}>
            Home
          </NavLink>
          <NavLink to="/practice" className={({ isActive }) => isActive ? 'text-primary font-semibold' : 'text-slate-600'}>
            Practice
          </NavLink>
          <NavLink to="/resources" className={({ isActive }) => isActive ? 'text-primary font-semibold' : 'text-slate-600'}>
            Resources
          </NavLink>
          <NavLink to="/profile" className={({ isActive }) => isActive ? 'text-primary font-semibold' : 'text-slate-600'}>
            Profile
          </NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <Switch checked={darkMode} onChange={() => setDarkMode(prev => !prev)} />
          <Button component={NavLink} to="/practice" variant="contained" size="small">
            Start Practicing
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}