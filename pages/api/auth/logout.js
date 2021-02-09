import nextConnect from 'next-connect';
import middleware from '../../../middleware/index';
import passport from '../../../lib/auth/passport';


const handler = nextConnect();

handler.use(middleware);

handler.get((req, res) => { 
    req.logout();
    res.redirect('/');
});

export default handler;