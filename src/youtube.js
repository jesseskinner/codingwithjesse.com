require('dotenv/config');
const axios = require('axios');
const { writeFileSync } = require('fs');

const { YOUTUBE_RECENT_URL } = process.env;

function getPage(token) {
	return axios.get(
		`${YOUTUBE_RECENT_URL}${token ? `&pageToken=${token}` : ''}`,
		{
			headers: {
				Accept: 'application/json',
			},
		}
	);
}

function writeVideos(videos) {
	writeFileSync(
		__dirname + '/youtube.json',
		JSON.stringify(
			videos.map(
				({
					id: { videoId },
					snippet: { publishedAt, title, thumbnails },
				}) => ({
					url: `https://www.youtube.com/watch?v=${videoId}`,
					title: title.replace('&#39;', "'"),
					thumbnail: thumbnails.medium.url,
					date: publishedAt,
				})
			)
		)
	);
}

let videos = [];

getPage().then(handlePage);

function handlePage({ data: { nextPageToken, items } }) {
	videos = [...videos, ...items];

	if (nextPageToken) {
		getPage(nextPageToken).then(handlePage);
	} else {
		writeVideos(videos);
	}
}
