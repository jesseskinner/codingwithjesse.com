export async function api(endpoint, params) {
	const response = await fetch(`/api/${endpoint}${getQuery(params)}`);
	const json = await response.json();

	console.log('[api]', endpoint, json);

	return json;
}

function getQuery(params) {
	if (params) {
		return (
			'?' +
			Object.keys(params)
				.map(
					key =>
						`${encodeURIComponent(key)}=${encodeURIComponent(
							params[key]
						)}`
				)
				.join('&')
		);
	}
	return '';
}
