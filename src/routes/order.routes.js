const router = require('express').Router();
const order = require('../controllers/order.controller');
const auth = require('../middlewares/auth.middleware');

router.post('/', auth, order.createOrder);
router.get('/my', auth, order.getMyOrders);
router.get('/my/:orderId', auth, order.getMyOrderById);

module.exports = router;
