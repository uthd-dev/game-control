export function extractUser(req) {
    if (!req.user) return null;
    // take only needed user fields to avoid sensitive ones (such as password)
    const {
      username, email, fname, profileImg, stats, displayName
    } = req.user;
    return {
      username, email, fname, profileImg, stats, displayName, loggedIn: true,
    };
  }