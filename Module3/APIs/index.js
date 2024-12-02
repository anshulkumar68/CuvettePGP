const express = require("express");
const Post = require("./models/Post");
const db = require("./config/db");
const app = express();
const port = 3000;
app.use(express.json());

db()
  .then(() => {
    console.log("Successfully connected to db");
  })
  .catch((err) => console.log(err));

// to check the health of the api
app.get("/api", (req, res) => {
  res.status(200).json({ message: "api is working fine" });
});

// fetching all the posts
app.get("/api/posts", (req, res) => {
  Post.find({})
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
});

//get a specific post
app.get("/api/posts/:id", (req, res) => {
  let postid = req.params.id;
  Post.find({ _id: postid })
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
});

// create a new post
app.post("/api/posts/", (req, res) => {
  let newPost = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  newPost
    .save()
    .then((data) => {
      res
        .status(200)
        .json({ message: "post created successfully", data: data });
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
});

// updating a specific post
app.put("/api/posts/:id", (req, res) => {
  let postid = req.params.id;
  let newInfo = {
    title: req.body.title,
    description: req.body.description,
  };
  Post.findByIdAndUpdate(postid, newInfo)
    .then((data) => {
      res.status(200).json({ message: "post updated successfully", data });
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
});

// deleting a specific post
app.delete("/api/posts/:id", (req, res) => {
  let postid = req.params.id;
  Post.findByIdAndDelete(postid).then((data) => {
    res
      .status(200)
      .json({ message: "post deleted successfully" })
      .catch((err) => {
        res.status(500).json({ message: err });
      });
  });
});

app.listen(port, (err) => {
  if (!err) {
    console.log(`App is running on port ${port}`);
  }
});
