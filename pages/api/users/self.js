import nextConnect from "next-connect";
import middleware from "../../../middleware/index";
import { extractUser } from "../../../utils/users";

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    const user = await extractUser(req);
    res.json({ user: user });
});

export default handler;