var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    // res.send('Hello World');
    // res.render('index');
    res.render('index', {
        h1: 'Admin Area'
    });
});

router.get('/add_page', function (req, res) {
    var title = "";
    var link = "";
    var content = "";

    res.render('admin/add_page', {
        title : title,
        link : link,
        content : content
    });
});

router.post('/add-page', function(req, res){

    req.checkBody('title', 'Title harus diisi !!!').notEmpty();
    req.checkBody('content', 'Content harus diisi !!!').notEmpty();
    var title = req.body.title;
    var link = req.body.link.replace(/\s+/g, '-').toLowerCase();
    if(link==""){
        link = req.body.link.replace(/\s+/g, '-').toLowerCase();
    }
    var content = req.body.content;

    var error = req.validationErrors();

    if(errors){
        res.render('admin/add_page', {
            errors:errors,
            title:title,
            link:link,
            content:content

        });
    }else{
        console.log('Berhasil');
    }
});

module.exports = router; //mengeskpor agar route bisa terpakai