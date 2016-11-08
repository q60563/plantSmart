var Router = require('koa-router');
var contrallers = require('./contraller');
var router = new Router();

router.get('/home',contrallers.home);
router.get('/home/status',contrallers.status);
router.post('/plant',contrallers.information);

module.exports = router;


