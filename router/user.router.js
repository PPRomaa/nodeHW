const router = require('express').Router();

const controller = require("../controller/user.controller");
const mdlwr = require("../middleware/user.middleware");

router.get('/', controller.getAllUsers);
router.post('/', mdlwr.isBodyValidCreate,mdlwr.userNormalizator, mdlwr.checkIsEmailUnique, controller.createUser);

router.get('/:userId', mdlwr.checkIsUserExist, controller.getUserById);
router.put('/:userId', mdlwr.isBodyValidUpdate, mdlwr.userNormalizator, mdlwr.checkIsUserExist, controller.updateUser);
router.delete('/:userId', controller.deleteUserById);

module.exports = router;