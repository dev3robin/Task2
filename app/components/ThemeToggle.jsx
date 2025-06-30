import React from 'react';
import { Switch } from '@mui/material';

const ThemeToggle = ({ isDark, toggleTheme }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Switch checked={isDark} onChange={toggleTheme} />
    </div>
  );
};

export default ThemeToggle;
