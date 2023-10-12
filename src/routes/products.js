import { Router } from 'express';
import {
  addProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
  uploaderProduct
} from '../controllers/products.js';

const router = Router();

router.get('/', getProducts);

router.get('/:pid', getProductById);

router.post('/', uploaderProduct, addProduct);

router.put('/:pid', updateProduct);

router.delete('/:pid', deleteProduct);

export default router;
