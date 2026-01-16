const router = require('express').Router();
const admin = require('../controllers/admin.controller');
const auth = require('../middlewares/auth.middleware');
const { isAdmin } = require('../middlewares/role.middleware');

router.use(auth, isAdmin);

router.get('/orders', admin.getAllOrders);
router.get('/orders/:orderId', admin.getOrderById);
router.patch('/orders/:orderId/status', admin.updateOrderStatus);
router.delete('/orders/:orderId', admin.deleteOrder);

router.get('/users', admin.getAllUsers);
router.get('/users/:userId', admin.getUserById);
router.patch('/users/:userId/role', admin.updateUserRole);
router.delete('/users/:userId', admin.deleteUser);

module.exports = router;
