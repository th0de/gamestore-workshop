const express = require('express');
const router = express.Router('/api/health');

// GET /api/health
router.get('/api/health', (req, res, next) => {
    res.send('OK');
});

// ROUTER: /api/video-games
router.use('/api/video-games', require('./videoGames'));

// ROUTER: /api/board-games
router.use('api/board-games', require('./boardGames'));

module.exports = router;