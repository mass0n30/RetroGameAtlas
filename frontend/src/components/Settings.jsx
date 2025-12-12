import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Switch,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Divider,
  Slider,
} from '@mui/material';

export default function Settings() {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(false);
  const [gridSize, setGridSize] = useState(4);
  const [accent, setAccent] = useState('purple');

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', mt: 4, px: 2 }}>
      <Typography variant="h4" gutterBottom color="text.primary">
        Settings
      </Typography>

      <Paper sx={{ bgcolor: '#191c25', p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>Appearance</Typography>
        <List>
          <ListItem>
            <ListItemText primary="Dark Mode" secondary="Keep the retro vibe" />

          </ListItem>

          <ListItem>
            <ListItemText primary="Accent Color" />
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <Select value={accent} onChange={(e) => setAccent(e.target.value)}>
                <MenuItem value="purple">Purple</MenuItem>
                <MenuItem value="orange">Orange</MenuItem>
                <MenuItem value="cyan">Cyan</MenuItem>
              </Select>
            </FormControl>
          </ListItem>

          <ListItem>
            <ListItemText primary="Game Grid Size" secondary={`${gridSize} columns`} />

          </ListItem>
        </List>
      </Paper>

      <Paper sx={{ bgcolor: '#191c25', p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>Notifications</Typography>
        <List>
          <ListItem>
            <ListItemText primary="Speedrun Updates" />

          </ListItem>
        </List>
      </Paper>

      <Box sx={{ textAlign: 'right' }}>
        <Button
          variant="contained"
          sx={{
            bgcolor: '#a78bfa', // your recommended soft purple
            '&:hover': { bgcolor: '#8b5cf6' },
          }}
        >
          Save Changes
        </Button>
      </Box>
    </Box>
  );
}