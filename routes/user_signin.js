const express = require('express');
const mongoose = require('mongoose');
const UserDB = require('../DB/models/user');
const router = express.Router();
router.use(express.json());

router.post('/api/signin', async(req, res) => {
    console.log(req.body);
    const {email, password} = req.body;
    try {
        let user = await UserDB.findOne({email});
        if(!user) {
            return res.json({status: "Failed!" }).end()
        }

        if(password == user.password) {
            //res.sendFile(path.join(__dirname, '..', 'public', 'shop.html'));
            res.render('home', {title: 'express'});
            return res.json({status: "ok" }).end()
        }
        
    } catch (error) {
        res.json({status: "failed", stat: "aefae"});
    }
    res.json({status: "failed", stat: "aefae"});

})


module.exports =  router;