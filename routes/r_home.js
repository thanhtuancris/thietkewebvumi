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
   const customer = new Customer({
        hoten: req.body.hoten,
        sodt: req.body.dienthoai,
        email: req.body.email,
        diachi: req.body.diachi,
        tieude: req.body.tieude,
        noidung: req.body.noidung
    });
    customer.save((err) => {
        if (err) {
            res.json({
                status: "error",
                message: err
            });
        }else{
            res.json({
                status: "success",
                message: "success"
            }); 
        }
    });

    console.log(req.body);
})
module.exports = router; 