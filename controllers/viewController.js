const { getYear } = require('../modules/date.js');

const { getAllUsers } = require('./userController.js');
const { getAllAdmins } = require('./adminController.js');
const { getSendtMessages, getReceivedMessages } = require('./messageController.js');

const assignProperties = (target, source) => Object.assign(target, source);

const renderIndex = async (req, res, additionalProperties) => {
    try {
        const receivedMessages = await getReceivedMessages(req, res, req.user.email);

        const viewProperties = { title: 'Home', year: getYear(), receivedMessages };

        if (additionalProperties) assignProperties(viewProperties, additionalProperties);

        res.render('index', viewProperties);
    } catch (err) {
        console.log(err);
    }
};

const renderJobExperience = async (req, res, additionalProperties) => {
    try {
        const receivedMessages = await getReceivedMessages(req, res, req.user.email);

        const viewProperties = { title: 'Job Experience', year: getYear(), receivedMessages };

        if (additionalProperties) assignProperties(viewProperties, additionalProperties);
    
        res.render('jobExperience', viewProperties);
    } catch(err) {
        console.log(err);
    }
};

const renderEducation = async (req, res, additionalProperties) => {
    try {
        const receivedMessages = await getReceivedMessages(req, res, req.user.email);

        const viewProperties = { title: 'Education', year: getYear(), receivedMessages };

        if (additionalProperties) assignProperties(viewProperties, additionalProperties);

        res.render('education', viewProperties);
    } catch (err) {
        console.log(err);
    }
};

const renderProjects = async (req, res, additionalProperties) => {
    try {
        const receivedMessages = await getReceivedMessages(req, res, req.user.email);

        const viewProperties = { title: 'Projects', year: getYear(), receivedMessages };

        if (additionalProperties) assignProperties(viewProperties, additionalProperties);

        res.render('projects', viewProperties);
    } catch (err) {
        console.log(err);
    }
};

const renderSettings = async (req, res, additionalProperties) => {
    try {
        const receivedMessages = await getReceivedMessages(req, res, req.user.email);

        const viewProperties = { title: 'Settings', year: getYear(), receivedMessages };

        if (additionalProperties) assignProperties(viewProperties, additionalProperties);

        res.render('settings', viewProperties);
    } catch (err) {
        console.log(err);
    }
};

const renderInbox = async (req, res, additionalProperties) => {
    try {
        const sendtMessages = await getSendtMessages(req, res, req.user.email);
        const receivedMessages = await getReceivedMessages(req, res, req.user.email);

        const viewProperties = { title: 'Inbox', year: getYear(), sendtMessages, receivedMessages };

        // const sendtMessages = [
        //     {
        //         subject: 'Test',
        //         body: 'Test 123',
        //         senderEmail: 'test@test.com',
        //         receiverEmail: 'test1@test.com',
        //     },
        //     {
        //         subject: 'Test 00',
        //         body: 'Test 1234',
        //         senderEmail: 'test@test.com',
        //         receiverEmail: 'test1@test.com',
        //     }
        // ];

        // const receivedMessages = [
        //     {
        //         subject: 'Test2',
        //         body: 'Test 12356',
        //         senderID: 'test1@test.com',
        //         senderID: 'test@test.com',
        //     },
        //     {
        //         subject: 'Test 14',
        //         body: 'Test 12347',
        //         senderID: 'test1@test.com',
        //         senderID: 'test@test.com',
        //     }
        // ];

        if(additionalProperties) assignProperties(viewProperties, additionalProperties);

        res.render('inbox', viewProperties);
    } catch (err) {
        console.log(err);
    }
};

const renderSignup = async (req, res, additionalProperties) => {
    const viewProperties = { title: 'Signup', year: getYear() };

    if(additionalProperties) assignProperties(viewProperties, additionalProperties);

    res.render('signup', viewProperties);
};

const renderLogin = async (req, res, additionalProperties) => {
    const viewProperties = { title: 'Login', year: getYear() };

    if(additionalProperties) assignProperties(viewProperties, additionalProperties);

    res.render('login', viewProperties);
};

const renderAdminDashboard = async (req, res, additionalProperties) => {
    try {
        const users = await getAllUsers();
        const admins = await getAllAdmins();

        const receivedMessages = await getReceivedMessages(req, res, req.user.email);

        const viewProperties = { title: 'Dashboard', year: getYear(), receivedMessages };

        additionalProperties.users = users;
        additionalProperties.admins = admins;

        if(additionalProperties) assignProperties(viewProperties, additionalProperties);

        res.render('dashboard', viewProperties);
    } catch (err) {
        console.log(err);
    }
};

const render404 = async (req, res, additionalProperties) => {
    try {
        const receivedMessages = await getReceivedMessages(req, res, req.user.email);

        const viewProperties = { title: '404', year: getYear(), receivedMessages };

        if (additionalProperties) assignProperties(viewProperties, additionalProperties);

        res.status(404).render('404', viewProperties);   
    } catch (err) {
        console.log(err);
    }
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