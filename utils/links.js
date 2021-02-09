import Link from '../lib/db/schema/links'

export async function getLinks(req, context, permLevel) {
    if (!req.user) return [];
    const links = await Link.find({context: context,permLevel: { $lte: permLevel}})
    return links;
  }