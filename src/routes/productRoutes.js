import express from 'express';

import{
    createProd,
    getProd,
    getProdById,
    updateProd,
    deleteProd
} from '../controllers/productController';

const router = express.Router();

router.post('/products', createProd);
router.get('/products', getProd);
router.get('/products/:id', getProdById);
router.put('/products/:id', updateProd);
router.delete('/products/:id', deleteProd);

module.exports = router;