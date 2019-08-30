var User = require('../models/User.model');

exports.register = (req, res) => {
    var newUser = new User();

    newUser.username = req.body.username;
    newUser.email = req.body.email;
    newUser.password = req.body.password;

    newUser.save((err, user) => {
        if(err){
            console.log('error saving user ', err)
            console.log(err.message);//mongoose error
            console.log(err.errors.username.message);
        } else{
            console.log('User saved!', user);
            res.redirect('/signup.html');
        }
    })
}