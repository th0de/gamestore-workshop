const express = require('express');
const router = express.Router();

const { getAllBoardGames,
    getBoardGameById,
    createBoardGame,
    updateBoardGame,
    deleteBoardGame } = require('../db/boardGames');



    // GET - /api/board-games - get all board games
router.get('/api/board-games', async (req, res, next) => {
    try {
        const boardGames = await getAllBoardGames();
        res.get(boardGames);
    } catch (error) {
        next(error);
    }
});

// GET - /api/board-games/:id - get a single board game by id
router.get('/api/board-games/:id', async (req, res, next) => {
    try {
        const boardGame = await getBoardGameById(req.params.id);
        res.get(boardGame);
    } catch (error) {
        next(error);
    }
});

// POST - /api/board-games - create a new board game
router.post('/api/board-games', async (req, res, next) => {
    try {
        const boardGame = await createBoardGame(req.body);
        res.post(boardGame);
    } catch (error) {
        next(error);
    }
});

// PUT - /api/board-games/:id - update a single board game by id
router.put('/api/board-games/:id', async (req, res, next) => {
    try {
        const boardGame = await updateBoardGame(req.params.id, req.body);
        res.put(boardGame);
    } catch (error) {
        next(error);
    }
});

// DELETE - /api/board-games/:id - delete a single board game by id
router.delete('apit/board-games/:id', async (req, res, next) => {
    try {
        const boardGame = await deleteBoardGame(req.params.id);
        res.delete(boardGame);
    } catch (error) {
        next(error);
    }
});

module.exports;{
    router
};