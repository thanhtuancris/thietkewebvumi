const express = require('express');
const router = express.Router();
const Customer = require('../models/Customers');
const Template = require('../models/Template');

router.get('/', (req, res) => {
    Template.find({}, function (err,data) {
        if(err) {
            res.json({
                status: "error",
                message: err
            });
        }else{
            res.render('home', {danhsach: data});
        }
    });
    
});


router.get('/:id', (req, res) => {
    Template.findOne({_id: req.params.id}, function (err, data){   
        if(err){
            res.json({
                status: "err",
                message: err
            });
        }else{
            res.render('Template-Detail', {danhsach: data});
        }
    })
})


router.post('/', (req, res) => {
            const customer = new Customer({
                id_template: req.body.id_template,
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
        
    });

module.exports = router; 