require('dotenv/config');
const axios = require('axios');
const { writeFileSync } = require('fs');

const { YOUTUBE_RECENT_URL } = process.env;

axios
	.get(YOUTUBE_RECENT_URL, {
		headers: {
			Accept: 'application/json',
		},
	})
	.then(({ data }) =>
		writeFileSync(
			__dirname + '/youtube-recent.json',
			JSON.stringify(
				data.items.map(
					({
						id: { videoId },
						snippet: { publishedAt, title, thumbnails },
					}) => ({
						url: `https://www.youtube.com/watch?v=${videoId}`,
						title: title.replace('&#39;', "'"),
						thumbnail: thumbnails.medium,
						date: publishedAt,
					})
				)
			)
		)
	);
