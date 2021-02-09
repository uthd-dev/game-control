import nextConnect from "next-connect";
import middleware from "../../../middleware/index";
import { extractUser } from "../../../utils/users";

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => res.json({ user: await extractUser(req) }));

export default handler;