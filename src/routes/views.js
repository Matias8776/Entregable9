import { Router } from 'express';
import {
  cart,
  chat,
  login,
  notFound,
  privateAccess,
  productById,
  products,
  publicAccess,
  realtimeproducts,
  register,
  resetPassword
} from '../controllers/views.js';

const router = Router();

router.get('/', publicAccess, login);

router.get('/register', publicAccess, register);

router.get('/realtimeproducts', realtimeproducts);

router.get('/chat', chat);

router.get('/products', privateAccess, products);

router.get('/products/:pid', privateAccess, productById);

router.get('/carts/:cid', privateAccess, cart);

router.get('/resetPassword', publicAccess, resetPassword);

router.use(notFound);

export default router;
