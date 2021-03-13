const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

router.post('/register', async (req, res)=>{
    var salt = await bcrypt.genSalt(10);
    var hashPassword = await bcrypt.hash("req.body.body", salt);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword
    })
    try{
        const savedUser = await user.save();
        res.send(savedUser);
    }catch(err){
        res.status(400).send(err)
    }
})



module.exports = router;