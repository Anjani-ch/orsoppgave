const { getYear } = require('../modules/date.js');

const { getAllUsers } = require('./userController.js');

const assignProperties = (target, source) => Object.assign(target, source);

const renderIndex = (req, res, additionalProperties) => {
    const viewProperties = { title: 'Home', year: getYear() };

    if (additionalProperties) assignProperties(viewProperties, additionalProperties);
    res.render('index', viewProperties);
};

const renderJobExperience = (req, res, additionalProperties) => {
    const viewProperties = { title: 'Job Experience', year: getYear() };

    if (additionalProperties) assignProperties(viewProperties, additionalProperties);
    res.render('jobExperience', viewProperties);
};

const renderEducation = (req, res, additionalProperties) => {
    const viewProperties = { title: 'Education', year: getYear() };

    if (additionalProperties) assignProperties(viewProperties, additionalProperties);
    res.render('education', viewProperties);
};

const renderProjects = (req, res, additionalProperties) => {
    const viewProperties = { title: 'Projects', year: getYear() };

    if (additionalProperties) assignProperties(viewProperties, additionalProperties);
    res.render('projects', viewProperties);
};

const renderSettings = (req, res, additionalProperties) => {
    const viewProperties = { title: 'Settings', year: getYear() };

    if (additionalProperties) assignProperties(viewProperties, additionalProperties);
    res.render('settings', viewProperties);
};

const renderInbox = (req, res, additionalProperties) => {
    const viewProperties = { title: 'Inbox', year: getYear() };

    if (additionalProperties) assignProperties(viewProperties, additionalProperties);
    res.render('inbox', viewProperties);
};

const renderSignup = (req, res, additionalProperties) => {
    const viewProperties = { title: 'Signup', year: getYear() };

    if (additionalProperties) assignProperties(viewProperties, additionalProperties);
    res.render('signup', viewProperties);
};

const renderLogin = (req, res, additionalProperties) => {
    const viewProperties = { title: 'Login', year: getYear() };

    if (additionalProperties) assignProperties(viewProperties, additionalProperties);
    res.render('login', viewProperties);
};

const renderAdminDashboard = async (req, res, additionalProperties) => {
    try {
        const users = await getAllUsers();

        const viewProperties = { title: 'Dashboard', year: getYear() };

        if (typeof additionalProperties === 'undefined') additionalProperties = {};

        additionalProperties.users = users;

        if (additionalProperties) assignProperties(viewProperties, additionalProperties);
        res.render('dashboard', viewProperties);
    } catch (err) {
        console.log(err);
    }
};

const render404 = (req, res, additionalProperties) => {
    const viewProperties = { title: '404', year: getYear() };

    if (additionalProperties) assignProperties(viewProperties, additionalProperties);
    res.render('404', viewProperties);
};

module.exports = {
    renderIndex,
    renderJobExperience,
    renderEducation,
    renderProjects,
    renderSettings,
    renderInbox,
    renderSignup,
    renderLogin,
    renderAdminDashboard,
    render404
};