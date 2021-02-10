import { getLinks } from "../../../utils/links";
import { getSession } from "next-auth/client";


export default async (req, res) => {
  const session = await getSession({ req });

  if (session) {
    const { context } = req.query;
    const { permLevel } = session.user;
    res.json({ nav: await getLinks(req, context, permLevel) });
  }
  else res.json([]); 
};