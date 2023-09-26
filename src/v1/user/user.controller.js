const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('./user.model');
const errorHandler = require('../../utils/errorHandler');

const signupUser = errorHandler(async(req,res,next)=>{
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    if (!name || !email || !password) {
        res.status(406).json({message: 'Missing values!'});
        return;
    }

    const existingUser = await User.findOne({
        where: {
          email: email
        }
      });
 
    if (existingUser) {
        res.status(406).json({message: 'Email already exists!'});
        return;
    }    
    
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({name: name, email: email, password: hashedPassword,});
     
    res.status(201).json({message: 'User Created!'});
});

const loginUser = errorHandler(async(req,res,next)=>{
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        res.status(406).json({message: 'Missing values!'});
        return;
    }

    const user = await User.findOne({
        where: {
          email: email
        }
      });
 
    if (!user) {
        res.status(404).json({message: 'User with provided email not found'});
        return;
    }

    const matched = await bcrypt.compare(password, user.password);

    if (!matched) {
        res.status(401).json({message: 'Incorrect Password'});
        return;
    }

    const token = jwt.sign({
        userId: user.id
    },process.env.PASSWORD_KEY,{expiresIn: '1d'});

    res.status(202).json({message: 'Login Successful!',token: token});
});

const getUser = errorHandler(async (req,res,next) => {
    const userId = req.userId;

    const user = await User.findOne({
        where: {
            id: userId
        }
    }); 
    
    delete user.dataValues.password;

    res.json({user: user});
});


module.exports = {signupUser,loginUser, getUser}