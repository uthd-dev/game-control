import Link from '../lib/db/schema/links'

export async function getLinks(req, context, role) {
    if (!req.user) return [];
    return await Link.find({context: context,role: role})
  }