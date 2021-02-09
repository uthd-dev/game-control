import nextConnect from "next-connect";
import middleware from "../../../middleware/index";
import { getLinks } from "../../../utils/links"

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    const { context } = req.query;
    const { role } = req.user;
    res.json({ nav: await getLinks(req, context, role) })
});

export default handler;
