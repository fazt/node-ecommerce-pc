import passport from 'passport'
import User from '../models/User'
import { Strategy as LocalStrategy } from 'passport-local'

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

passport.use('local.signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    try {
        const user = await User.findOne({ email })

        // this store the message in req.flash('error')
        if (user) return done(null, false, { message: 'Email is already in use' });

        const newUser = new User();
        newUser.email = email;
        newUser.password = await newUser.encryptPassword(password);

        await newUser.save();
        done(null, newUser)
    } catch (error) {
        return done(error);
    }
}));