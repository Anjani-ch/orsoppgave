const { getYear, formatWithDateAndTime } = require('../modules/date.js');

const { Message } = require('../models/Message.js');

const { getAllUsers } = require('./userController.js');
const { getAllAdmins } = require('./adminController.js');
// const { getSendtMessages, getReceivedMessages } = require('./messageController.js');
const { getNotifications } = require('./notificationController.js');
const { getEmails } = require('./emailController.js');

const assignProperties = (target, source) => Object.assign(target, source);

const renderIndex = async (req, res, additionalProperties) => {
    try {
        const viewProperties = { title: 'Home', year: getYear() };

        if(req.isAuthenticated()) {
            // const receivedMessages = await getReceivedMessages(req, res, req.user.email);
            const receivedMessages = await Message.find({ receiverEmail: req.user.email });

            assignProperties(viewProperties, { receivedMessages });
        }

        if(additionalProperties) assignProperties(viewProperties, additionalProperties);

        res.render('index', viewProperties);
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Error rendering view' });
    }
};

const renderJobExperience = async (req, res, additionalProperties) => {
    try {
        // const receivedMessages = await getReceivedMessages(req, res, req.user.email);
        const receivedMessages = await Message.find({ senderEmail: req.user.email });

        const viewProperties = { title: 'Job Experience', year: getYear(), receivedMessages };

        if(additionalProperties) assignProperties(viewProperties, additionalProperties);
    
        res.render('jobExperience', viewProperties);
    } catch(err) {
        console.log(err);
        res.status(500).json({ msg: 'Error rendering view' });
    }
};

const renderEducation = async (req, res, additionalProperties) => {
    try {
        // const receivedMessages = await getReceivedMessages(req, res, req.user.email);
        const receivedMessages = await Message.find({ receiverEmail: req.user.email });

        const viewProperties = { title: 'Education', year: getYear(), receivedMessages };

        if(additionalProperties) assignProperties(viewProperties, additionalProperties);

        res.render('education', viewProperties);
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Error rendering view' });
    }
};

const renderProjects = async (req, res, additionalProperties) => {
    try {
        // const receivedMessages = await getReceivedMessages(req, res, req.user.email);
        const receivedMessages = await Message.find({ receiverEmail: req.user.email });

        const viewProperties = { title: 'Projects', year: getYear(), receivedMessages };

        if(additionalProperties) assignProperties(viewProperties, additionalProperties);

        res.render('projects', viewProperties);
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Error rendering view' });
    }
};

const renderSettings = async (req, res, additionalProperties) => {
    try {
        // const receivedMessages = await getReceivedMessages(req, res, req.user.email);
        const receivedMessages = await Message.find({ receiverEmail: req.user.email });

        const viewProperties = { title: 'Settings', year: getYear(), receivedMessages };

        if(additionalProperties) assignProperties(viewProperties, additionalProperties);

        res.render('settings', viewProperties);
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Error rendering view' });
    }
};

const renderInbox = async (req, res, additionalProperties) => {
    try {
        // const sendtMessages = await getSendtMessages(req, res, req.user.email);
        // const receivedMessages = await getReceivedMessages(req, res, req.user.email);
        const sendtMessages = await Message.find({ senderEmail: req.user.email });
        const receivedMessages = await Message.find({ receiverEmail: req.user.email });

        const viewProperties = { title: 'Inbox', year: getYear(), sendtMessages, receivedMessages };

        if(additionalProperties) assignProperties(viewProperties, additionalProperties);

        res.render('inbox', viewProperties);
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Error rendering view' });
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

const renderSitemap = (req, res, additionalProperties) => {
    const viewProperties = { title: 'Sitemap', year: getYear() };

    if(additionalProperties) assignProperties(viewProperties, additionalProperties);

    res.render('sitemap', viewProperties);
};

const renderAdminDashboard = async (req, res, additionalProperties) => {
    try {
        const users = await getAllUsers();
        const admins = await getAllAdmins();

        let emails = await getEmails();
        let notifications = await getNotifications();

        notifications = notifications.map(notification => {
            const { dueTime } = notification;

            return { ...notification._doc, dueTime: formatWithDateAndTime(dueTime) };
        });

        emails = emails.map(email => {
            const { dueTime } = email;

            return { ...email._doc._doc, dueTime: formatWithDateAndTime(dueTime) };
        });

        // const receivedMessages = await getReceivedMessages(req, res, req.user.email);
        const receivedMessages = await Message.find({ receiverEmail: req.user.email });

        const viewProperties = { title: 'Dashboard', year: getYear(), receivedMessages, users, admins, emails, notifications };

        if(additionalProperties) assignProperties(viewProperties, additionalProperties);

        res.render('dashboard', viewProperties);
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Error rendering view' });
    }
};

const render404 = async (req, res, additionalProperties) => {
    try {
        // const receivedMessages = await getReceivedMessages(req, res, req.user.email);
        const receivedMessages = await Message.find({ receiverEmail: req.user.email });

        const viewProperties = { title: '404', year: getYear(), receivedMessages };

        if (additionalProperties) assignProperties(viewProperties, additionalProperties);

        res.status(404).render('404', viewProperties);   
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Error rendering view' });
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
    renderSitemap,
    renderAdminDashboard,
    render404
};