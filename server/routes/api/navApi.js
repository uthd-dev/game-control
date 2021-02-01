const express = require("express");
const router = express.Router();

const userNav = [
  {
    key: "play",
    text: "Play",
    href: "/play/uthd",
  },
  {
    key: "logout",
    text: "Logout",
    href: "/auth/logout",
  },
];
const adminNav = [
  {
    key: "dashboard",
    text: "Dashboard",
    href: "/admin/dashboard",
  },
];

router.get("/", (req, res) => {
  if (req.user) {
    res.setHeader("Content-Type", "application/json");
    if (req.user.role == "admin") {
      res.json({
        nav: [...adminNav, ...userNav],
      });
    } else {
      res.json({
        nav: userNav,
      });
    }
  } else res.status(403).end("403 Permission denied.");
});

module.exports = router;