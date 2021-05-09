const Snippet = require('../models/snippet');




async function index(req, res) {
    // get all snippets from the snippets model
    try {
      const snippets = await Snippet.find({});
      res.status(200).json(snippets); // http response as json data
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'Something went wrong' });
      }
  }

async function create(req, res) {
    try {
      const snippet = await Snippet.create(req.body);
      res.status(201).json(snippet);
    } catch (error) {
      res.status(401).json({ error: 'Something went wrong' }
      );
    }
}

module.exports = {
  index,
  create,

};
