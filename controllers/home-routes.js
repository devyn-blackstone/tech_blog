const { User, Post } = require("../models");
const router = require("express").Router();

router.get("/", (req, res) => {
  
  try{
      const userData = await User.findAll();
      const serializedUser = userData.map((user) => user.get({ plain: true}));console.log(serializedUser);

       res.render("homepage", { serializedUser, });
  }  catch(err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  res.render('login');
});

module.express = router;
