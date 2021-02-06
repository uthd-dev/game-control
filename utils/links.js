import Link from '../lib/db/schema/links'

export async function getLinks(req, context) {
    if (!req.user) return [];
    return await Link.find({})
  }