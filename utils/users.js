import User from '../lib/db/schema/users'

export async function extractUser(req) {
    if (!req.user) return null;
    // take only needed user fields to avoid sensitive ones (such as password)
    const {
      username, email, fname, profileImg, stats, displayName
    } = await User.findById(req.user.id)
    return {
      username, email, fname, profileImg, stats, displayName, loggedIn: true,
    };
  }