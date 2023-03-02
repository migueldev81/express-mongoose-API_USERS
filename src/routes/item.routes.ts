import { Router } from 'express';

const router = Router();

router.get('/api/items', (req, res) => {
  res.status(200).json('get items');
});

export default router;
