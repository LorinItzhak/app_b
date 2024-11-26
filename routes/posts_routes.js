
const express= require('express');
const router = express.Router();
const post_ = require('../controllers/post');

router.post('/',post_.AddANewPost);
router.get('/',post_.getAllPost);
router.get('/:id',post_.getPostById);
router.delete('/:id', post_.deleteAPost);
router.put('/:id', post_.updateAPost);


module.exports= router;