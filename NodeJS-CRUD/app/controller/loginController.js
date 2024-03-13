var User = require('../models/user');

module.exports.index = function(req, res) {
    res.render('login', { layout: 'layout' });
};

module.exports.indexPost = function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    if (username === 'root' && password === 'root') {
        res.redirect('/root');
    } else {
        res.redirect('/');
    }
}

module.exports.signUpGet = function(req, res) {
    res.render('signup', { layout: 'layout' });
}

module.exports.signUpPost = function(req, res) {
    var name = req.body.name;
    var surname = req.body.surname;
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;
    var newUser = new User({
        name: name,
        surname: surname,
        email: email,
        username: username,
        password: password
    });
    newUser.save();

    res.redirect('userList');
}

module.exports.userList = async function(req, res) {
    try {
        const users = await User.find({});
        res.render('userList', { layout: 'layout', userList: users });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

module.exports.deleteUser = async function(req, res) {
    try {
        const username = req.params.username;
        await User.deleteOne({
            username: username
        });
        res.redirect('/login/userList');
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}