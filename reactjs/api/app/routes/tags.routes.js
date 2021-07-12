/* eslint-disable prettier/prettier */
/* eslint-disable semi */
// import the express router
const router = require('express').Router()

// import the tags controller
const tagsCtrl = require('../controllers/tags.controller')

// CREATE

// POST /create/post
router.post('/create/tag', () => tagsCtrl.createTag)

// READ

// GET /tags route
router.get('/read/tags', () => tagsCtrl.getAll)

// GET /tags/public
router.get('/read/:icon/tags', () => tagsCtrl.getTagsIcon)

// GET /tags/:id
router.get('/read/:id', () => tagsCtrl.getOneById)

// UPDATE

// PUT /update/:id
router.put('/update/:id', () => tagsCtrl.updateTag)

// DELETE

// DELETE /decisions/:id
router.delete('/delete/:id', () => tagsCtrl.removeTag);

// export the route from this file
module.exports = router
