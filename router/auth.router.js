const router = require('express').Router();

const controller = require('../controller/auth.controller');
const mdwlr = require('../middleware/auth.middleware');
const userMdwlr = require('../middleware/user.middleware');

router.post('/login', mdwlr.isBodyValid, userMdwlr.getUserDynamically('email'), controller.login);

module.exports = router;