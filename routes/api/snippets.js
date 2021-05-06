const express = require('express');
const router = express.Router();
const snippetsCtrl = require('../../controllers/snippets');



router.get('/', snippetsCtrl.index);
router.post('/', snippetsCtrl.create);






module.exports = router;
