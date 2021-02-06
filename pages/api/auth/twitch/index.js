import nextConnect from 'next-connect';
import middleware from '../../../../middleware/index';
import passport from '../../../../lib/auth/passport';


const handler = nextConnect();

handler.use(middleware);

handler.get((req, res) => {
    if(req.query.returnTo) req.session.returnTo = `${req.query.returnTo}`;

    function doVerify() {
        if (req.query.verify) return req.query.verify == "true" ? true : false;
    }

    passport.authenticate("twitch", { forceVerify: doVerify() })(req, res);
});

export default handler;