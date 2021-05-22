import passport from 'passport'

export const renderSignupView = (req, res) => {
    const messages = req.flash('error')
    res.render('auth/signup', { csrfToken: req.csrfToken(), messages })
}

export const signup = passport.authenticate('local.signup', {
    successRedirect: '/profile',
    failureRedirect: '/auth/signup',
    failureFlash: true
});

export const profile = (req, res) => res.render('auth/profile');