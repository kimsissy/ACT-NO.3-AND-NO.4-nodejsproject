const express = require('express');
const router = express.Router();
const page = require('../controller/PageController.js');

router.get('/', page.home);
router.get('/content', page.content);
router.get('/message', page.message);
router.get('/contact', page.contact);
router.get('/about', page.about);
router.get('/gallery', (req, res) => {
    res.render('gallery');
});

module.exports = router;