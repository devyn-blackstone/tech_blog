const router = require("express").Router();
const { Post } = require("../../models");

router.post("/", async (req, res) => {
  const { title, summary } = req.body;
  try {
    const newPost = await Post.create({
      title,
      body,
      userId: req.session.userId,
    });
    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
