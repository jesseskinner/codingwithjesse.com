export async function api(endpoint) {
	const response = await fetch(`/api/${endpoint}`);
    const json = await response.json();
    
    console.log('[api]', endpoint, json);

    return json;
}
