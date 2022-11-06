const router = require("express").Router();
const apiRoutes = require("./api");

router.use((req, res) => {
  return res.send("wrong route");
});

module.exports = router;
