"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
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
exports.default = router;
