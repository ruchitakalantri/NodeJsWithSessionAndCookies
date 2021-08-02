exports.getLogin = (req, res, next) => {
  // output req.get('Cookie') : loggedIn=true
  console.log(req.get('Cookie').trim().split('=')[1]); // output : true
  const isLoggedIn = req
                      .get('Cookie')
                      .trim()
                      .split('=')[1]
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated : isLoggedIn
  });
  };

  exports.postLogin = (req, res, next) => {
    // with this: req is within this block bcoz ag=fter redirect req is gone
    // to store isLoggedIn data : we use cookies
    //req.isLoggedIn = true;

    // Cookies
    res.setHeader('Set-Cookie' , 'loggedIn=true')

    //Redirect to the given url 
    res.redirect('/')
};