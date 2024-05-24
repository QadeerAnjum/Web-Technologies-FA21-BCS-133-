const express = require('express');
const router = express.Router();
const Organisation = require('../models/Organisation');

const PAGE_SIZE = 10; // Number of items per page

router.get('/charity', async (req, res) => {
    try {
        const user = req.session.user;
        const page = parseInt(req.query.page) || 1; // Current page number
        const skip = (page - 1) * PAGE_SIZE; // Number of documents to skip

        const organisations = await Organisation.find().skip(skip).limit(PAGE_SIZE);
        const totalOrganisations = await Organisation.countDocuments();
        const totalPages = Math.ceil(totalOrganisations / PAGE_SIZE);

        res.render('organisations/list',{
            organisations,
            totalPages,
            currentPage: page,
            user: user
        });
    } catch (error) {
        console.error('Error fetching organisations:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
