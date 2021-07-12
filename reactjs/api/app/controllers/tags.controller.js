/* eslint-disable prettier/prettier */
/* eslint-disable object-curly-newline */
/* eslint-disable semi */
const { Tags } = require('../models/Tag') 

// CREATE METHOD

exports.createTag = (req, res) => {
  // get the title and type values from the request body
  const { count, icon, lastPostAt, name } = req.body
  // create the item and save the new id
  const tag = Tags.create(name, icon, count, lastPostAt)
  // send the new id back to the request
  return res.json({ tag })
}

// READ METHODS

// get all the tags
exports.getAll = (req, res) => {
  // run the find all function on the model
  const tags = Tags.findAll()
  // respond with json of the tags array
  return res.json(tags)
}
// get all the tags with a type of public
exports.getTagsIcon = (req, res) => {
  // run the find all function on the tags model
  const tags = Tags.findAll()
  // filter the tags to only tags who have a type of "public"
  const iconTags = tags.filter((tag) => tag.icon > 0)
  // respond with json of the public tags array
  return res.json(iconTags)
}

// find one tag by id
exports.getOneById = (req, res) => {
  // get the id from the route params
  const { id } = req.params
  // search our tags model for the tag
  const tag = Tags.findByPk(id)
  // if no tag is found
  if (!tag) {
    // return a 404 (not found) code
    res.sendStatus(404)
    return
  }
  // if the tag is found send it back
  res.json(tag)
}

// UPDATE METHOD

// update an existing tag
exports.updateTag = (req, res) => {
  // get the id from the route params
  const { id } = req.params
  // Perform an update method on the tags array in the Tags model
  const updatedTags = Tags.update(req.body, id)
  // Return the updated tags with a json response
  return res.json(updatedTags)
}

// DELETE METHOD

// delete a tag
exports.removeTag = (req, res) => {
  // get the id from the route
  const { id } = req.params
  // remove the tag
  Tags.destroy(id)

  // send a good status code
  res.sendStatus(200)
}
