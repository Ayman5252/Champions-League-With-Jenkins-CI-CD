const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/teams', (req, res) => {
  res.json({
    tournament: 'UEFA Champions League',
    host: 'Europe',
    teams: [
      'Real Madrid',
      'Manchester City',
      'Bayern Munich',
      'Barcelona',
      'Liverpool',
      'Paris Saint-Germain'
    ],
    champion: 'Real Madrid'
  });
});

app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    service: 'championsleague-app',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Champions League app running on port ${PORT}`);
});

module.exports = app;
