
const express= require('express');
const router = express.Router();
const post_ = require('../controllers/post');

router.get('/',post_.getAllPost);
router.post('/',post_.createPost);
router.delete('/', post_.deleteAPost);
router.put('/', post_.updateAPost);


module.exports= router;