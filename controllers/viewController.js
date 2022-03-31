const { getYear } = require('../modules/date.js');

const { getAllUsers } = require('./userController.js');
const { getAllAdmins } = require('./adminController.js');

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
    /* 
        const messageObj = {
            subject: {
                type: String,
                required: true
            },
            body: {
                type: String,
                required: true
            },
            senderID: {
                type: mongoose.Schema.Types.ObjectId,
                required: true
            },
            receiverID: {
                type: mongoose.Schema.Types.ObjectId,
                required: true
            }
        };
    */

    const sendtMessages = [
        {
            subject: 'Test',
            body: 'Test 123',
            senderID: 'test@test.com',
            senderID: 'test1@test.com',
        },
        {
            subject: 'Test 00',
            body: 'Test 1234',
            senderID: 'test@test.com',
            senderID: 'test1@test.com',
        }
    ];

    const receivedMessages = [
        {
            subject: 'Test2',
            body: 'Test 12356',
            senderID: 'test1@test.com',
            senderID: 'test@test.com',
        },
        {
            subject: 'Test 14',
            body: 'Test 12347',
            senderID: 'test1@test.com',
            senderID: 'test@test.com',
        }
    ];

    const viewProperties = { title: 'Inbox', year: getYear(), sendtMessages, receivedMessages };

    if(additionalProperties) assignProperties(viewProperties, additionalProperties);
    res.render('inbox', viewProperties);
};

const renderSignup = (req, res, additionalProperties) => {
    const viewProperties = { title: 'Signup', year: getYear() };

    if(additionalProperties) assignProperties(viewProperties, additionalProperties);
    res.render('signup', viewProperties);
};

const renderLogin = (req, res, additionalProperties) => {
    const viewProperties = { title: 'Login', year: getYear() };

    if(additionalProperties) assignProperties(viewProperties, additionalProperties);
    res.render('login', viewProperties);
};

const renderAdminDashboard = async (req, res, additionalProperties) => {
    try {
        const users = await getAllUsers();
        const admins = await getAllAdmins();

        const viewProperties = { title: 'Dashboard', year: getYear() };

        if(typeof additionalProperties === 'undefined') additionalProperties = {};

        additionalProperties.users = users;
        additionalProperties.admins = admins;

        if(additionalProperties) assignProperties(viewProperties, additionalProperties);

        res.render('dashboard', viewProperties);
    } catch (err) {
        console.log(err);
    }
};

const render404 = (req, res, additionalProperties) => {
    const viewProperties = { title: '404', year: getYear() };

    if (additionalProperties) assignProperties(viewProperties, additionalProperties);
    res.status(404).render('404', viewProperties);
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