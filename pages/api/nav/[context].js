import nextConnect from "next-connect";
import middleware from "../../../middleware/index";
import { getLinks } from "../../../utils/links";

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  if (req.user) {
    const { context } = req.query;
    const { permLevel } = req.user;
    res.json({ nav: await getLinks(req, context, permLevel) });
  }
  else res.json([]); 
});

export default handler;
