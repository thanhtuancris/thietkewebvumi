const express = require('express');
const router = express.Router();
const Customer = require('../models/Customers');
const Template = require('../models/Template');
const xss = require('xss');

router.get('/', (req, res) => {

    // const perPage = 13;
    //         const page = req.params.page;
    //         const skip = (page - 1)*perPage;
    //         const findTemplate = await Template.find().sort({Title: '-1'}).skip(skip).limit(perPage);
    //         const totalCustomer = await Customer.count();
    //         res.render('home', {
    //             // trang: "list",
    //             danhsach: findTemplate,
    //             currentPage: page,
    //             totalPage: Math.ceil(totalCustomer / perPage),
    //             numOfResults: totalCustomer
    //             });

//[[:punct:]]

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

router.post('/', async (req, res) => {
            const regsc = /script|html/ig;
            let hoten = req.body.hoten;
            hoten = hoten.replace(/[^\w\s]/gi,"");
            hoten = hoten.replace(regsc,"");

            let sodt = req.body.dienthoai;
            sodt = sodt.replace(/[^\w\s]/gi,"");
            sodt = sodt.replace(regsc,"");

            let email = req.body.email;
            email = email.replace(/[^\w\s]/gi,"");
            email = email.replace(regsc,"");

            let diachi = req.body.diachi;
            diachi = diachi.replace(/[^\w\s]/gi,"");
            diachi = diachi.replace(regsc,"");

            let tieude = req.body.tieude;
            tieude = tieude.replace(/[^\w\s]/gi,"");
            tieude = tieude.replace(regsc,"");

            let noidung = req.body.noidung;
            noidung = noidung.replace(/[^\w\s]/gi,"");
            noidung = noidung.replace(regsc,"");

            let customer = new Customer({
                id_template: req.body.id_template,
                hoten: hoten,
                sodt: sodt,
                email: email,
                diachi: diachi,
                tieude: tieude,
                noidung: noidung
            });
            let rs = await customer.save();
            if(rs != null){
                res.status(200).json({message: "success"});
            }else{
                res.status(400).json({message: "Error"});
            }
    });

    
module.exports = router; 