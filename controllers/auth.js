const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  // output req.get('Cookie') : loggedIn=true
  // console.log(req.get('Cookie').trim().split('=')[1]); // output : true
  // const isLoggedIn = req
  //                     .get('Cookie')
  //                     .trim()
  
  // console.log(req.session);
  // console.log(req.session.isLoggedIn);

  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated : false
  });
  };

  exports.postLogin = (req, res, next) => {
    // with this: req is within this block bcoz ag=fter redirect req is gone
    // to store isLoggedIn data : we use cookies
    //req.isLoggedIn = true;

    // Cookies
    //res.setHeader('Set-Cookie' , 'loggedIn=true')

    // //Session
    // req.session.isLoggedIn = true;

    // //Redirect to the given url 
    // res.redirect('/')

    User.findById('5bab316ce0a7c75f783cb8a8')
    .then(user => {
      req.session.isLoggedIn = true;
      req.session.user = user;
      res.redirect('/');
    })
    .catch(err => console.log(err));

  
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/');
  });
};