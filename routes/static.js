const { Router } = require('express');
const { homePage, signup, login } = require('../controllers/static');
const { checkForAuthentication } = require('../middlewares/auth');


const router = Router();




router.get('/', checkForAuthentication, homePage);
router.get('/signup', signup);
router.get('/login', login);

module.exports = router;