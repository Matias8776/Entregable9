import { Router } from 'express';
import {
  addCart,
  addProductToCart,
  deleteProductInCart,
  deleteProductsInCart,
  getCartById,
  getCarts,
  updateCart,
  updateProductQuantityInCart
} from '../controllers/carts.js';

const router = Router();

router.post('/', addCart);

router.get('/', getCarts);

router.get('/:cid', getCartById);

router.post('/:cid/product/:pid', addProductToCart);

router.delete('/:cid/products/:pid', deleteProductInCart);

router.put('/:cid', updateCart);

router.put('/:cid/products/:pid', updateProductQuantityInCart);

router.delete('/:cid', deleteProductsInCart);

export default router;
