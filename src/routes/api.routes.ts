import { Router } from 'express';

const router = Router();

//products
router.get('/products', (req, res) => {
  res.status(200).json({ message: 'get all products' });
});
router.get('/products:id', (req, res) => {
  res.status(200).json({ message: 'get one product' });
});
router.post('/products:id', (req, res) => {
  res.status(200).json({ message: 'post product' });
});
router.put('/products:id', (req, res) => {
  res.status(200).json({ message: 'update product' });
});
router.delete('/products:id', (req, res) => {
  res.status(200).json({ message: 'delete product' });
});

//clients

export default router;
