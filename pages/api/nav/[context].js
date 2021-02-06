import nextConnect from "next-connect";
import middleware from "../../../middleware/index";
import { getLinks } from "../../../utils/links"

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    const { context } = req.query;
    res.json({ nav: await getLinks(req, context) })
});

export default handler;
