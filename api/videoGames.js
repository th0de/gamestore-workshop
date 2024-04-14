const express = require('express');
const router = express.Router();
const videoGames = require (getAllVideoGames);

const { getAllVideoGames,
    getVideoGameById,
    createVideoGame,
    updateVideoGame,
    deleteVideoGame } = require('../db/videoGames');


    // GET - /api/video-games - get all video games
router.get('/api/video-games', async (req, res, next) => {
    try {
        const videoGames = await getAllVideoGames();
        res.get(videoGames);
    } catch (error) {
        next(error);
    }
});



// GET - /api/video-games/:id - get a single video game by id
router.get('/api/video-games/:id', async (req, res, next) => {
    try {
        const videoGame = await getVideoGameById('01');
        res.get(videoGame);
    } catch (error) {
        next(error);
    }
});



// POST - /api/video-games - create a new video game
router.patch('/', async (req, res, next) => {
    try{
        const videoGame  = await createVideoGame ('The Lorax Strikes Back');
        res.post(videoGame);
    }catch {(error);
    console.log(error);
    next(error);}
});



// PUT - /api/video-games/:id - update a single video game by id
router.put('/api/video-games/:id', async (req, res, next) => {
    try{
        const videoGame = await updateVideoGame (id='01');
    }catch {(error);
    console.log(error);
    next(error);}
});




// DELETE - /api/video-games/:id - delete a single video game by id
router.delete('/api/video-games/:id', async (req, res, next) => {
    try{
        const videoGame = await deleteVideoGame (); 
        res.delete(videoGame)
    }catch{(error);
    console.log(error);
    next(error);}
});

module.exports = (videoGames);np