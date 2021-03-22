const express = require('express');
const controller = require('../controllers/danceSessionController')

//Create router object
const router = express.Router();

//GET /available_sessions: send all available_sessions to the user
//Remember to remove prefix from the path in here
router.get('/', controller.index);

//GET /available_sessions/new: send HTML form for creating a new sessopm
router.get('/new', controller.new);

//POST /available_sessions: create a new session
router.post('/', controller.create);

//GET /available_sessions/:id: send details of sessopm identified by id
router.get('/:id', controller.show);

//GET /available_sessions/:id/edit: send html form for editing an existing session
router.get('/:id/edit', controller.edit);

//PUT /available_sessions/:id: Update the session identified by id
router.put('/:id', controller.update);

//DELETE /available_sessions/:id Delete the session identifies by id
router.delete('/:id', controller.delete);

module.exports = router;