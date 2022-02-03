const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => res.render('index', { title: 'Home', year: new Date().getFullYear() }));
router.get('/job-experience', (req, res) => res.render('job-experience', { title: 'Job Experience', year: new Date().getFullYear() }));
router.get('/education', (req, res) => res.render('education', { title: 'Education', year: new Date().getFullYear() }));
router.get('/projects', (req, res) => res.render('projects', { title: 'Projects', year: new Date().getFullYear() }));
router.get('/login', (req, res) => res.render('login', { title: 'Login', year: new Date().getFullYear() }));
router.get('/signup', (req, res) => res.render('signup', { title: 'Signup', year: new Date().getFullYear() }));
router.get('/download/resume', (req, res) => res.download('src/docs/cv.pdf'));

module.exports = router;