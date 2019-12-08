const express = require('express');
const router = express.Router();
const storiesData = require('../data/stories.json');

router.get('/', (req, res) => {
	res.send(storiesData);
});

router.get('/:id', (req, res) => {
	const findID = storiesData.find((IDData) => {
		return req.params.id === IDData.id;
	});
	if (findID) {
		return res.send(findID);
	} else {
		return res.status(404).send('ID Not Found');
	}
});
router.post('/', (req, res) => {
	res.send(storiesData);
});
// TODO: posting a new comment
// 1. get the correct story ID from the user
// 2. find the story using storyId
// 3. story.comments.push({})
router.post('/:storyId', (req, res) => {
	const newId = storiesData.length + 1;

	const newComments = {
		id: `Z${newId}`,
		name: req.body.name,
		type: req.body.type,
		img: 'https://source.unsplash.com/1600x900/?portrait,cancer',
		// "img" : req.body.img, hardcode img
		story: req.body.story
	};

	if (
		req.body.name &&
		req.body.type &&
		// req.body.img &&
		req.body.story
	) {
		storiesData.push(newComments);
		res.send(storiesData);
	} else {
		return response.status(400).send('Cannot Process Order With Empty Fields');
	}
});

// GET one story /:id
// POST one story /, BODY = { ... details ...}
// add story.comments = []
// push new story into storiesData

module.exports = router;
