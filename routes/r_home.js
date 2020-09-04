const express = require('express');
const router = express.Router();
const Customer = require('../models/Customers');

router.get('/', (req, res) => {
    res.render('home');
});
router.get('/polikal-political-candidate-party-theme-28319608', (req, res) => {
    res.render('polikal-political-candidate-party-theme-28319608');
})
router.post('/polikal-political-candidate-party-theme-28319608', (req, res) => {
    
})
module.exports = router; 