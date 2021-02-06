import nextConnect from "next-connect";
import middleware from "../../../../middleware/index";
import passport from "../../../../lib/auth/passport";

const handler = nextConnect();

handler.use(middleware);

handler.get(
  passport.authenticate("twitch", { failureRedirect: "/" }),
  async (req, res) => {
    // Successful authentication, redirect home (default) or returnTo (from session), and reset returnTo.
    if (req.session?.returnTo) {
      let returnTo = req.session.returnTo;
      req.session.returnTo = "/";
      res.redirect(`${process.env.hostUrl}${returnTo}`);
    } else res.redirect("/");
  }
);

export default handler;