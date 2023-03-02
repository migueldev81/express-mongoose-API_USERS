"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/api/items', (req, res) => {
    res.status(200).json('get items');
});
exports.default = router;
