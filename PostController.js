import Post from "./Post.js";

import PostService from "./PostService.js";

class PostController {
  async create(req, res) {
    try {
      const post = await PostService.create(req.body);

      res.status(200).json(post);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async getAll(req, res) {
    try {
      const posts = await PostService.getAll();

      res.json(posts);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async getOne(req, res) {
    try {
      const post = await PostService.getOne(req.params.id);

      res.json(post);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async update(req, res) {
    try {
      const post = req.body;

      const updatedPost = await PostService.update(post);

      res.json(updatedPost);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async delete(req, res) {
    const post = await PostService.delete(req.params.id);

    res.json(post);
    try {
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

export default new PostController();
