import nextConnect from "next-connect";
import middleware from "../../../../middleware/index";
import passport from "../../../../lib/auth/passport";

const handler = nextConnect();

handler.use(middleware);

handler.get(
  passport.authenticate("twitch", { failureRedirect: "/" }),
  async (req, res) => {
    // Successful authentication, redirect home (default) 
    if (req.session?.returnTo) {
      let returnTo = req.session.returnTo;
      req.session.returnTo = "/";
      res.redirect(`${process.env.HOST_URL}${returnTo}`);
    } else res.redirect("/");
  }
);

export default handler;