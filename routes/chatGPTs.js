var express = require('express');
var router = express.Router();

const chatGPTCtrl = require('../controllers/chatGPTs');
const ensureLoggedIn = require('../config/ensureLoggedIn');



router.put('/:patientId/dischSum', ensureLoggedIn, chatGPTCtrl.dischargeSummary)