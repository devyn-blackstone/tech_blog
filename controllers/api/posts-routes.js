const router = require("express").Router();
const { Post } = require("../../models");

router.post("/", async (req, res) => {
  const body = req.body;
  try {
    const newPost = await Post.create({
      ...body,
      title,
      userId: req.session.userId,
    });
    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.put('/:id', async (req, res) => {
//   try {
//     const [changes] = await Post.update(req.body, {
//       where: {
//         id: req.params.id,
//       },
//     });

//     if (changes > 0) {
//       res.status(200).end();
//     } else {
//       res.status(404).end();
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
