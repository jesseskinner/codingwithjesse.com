export async function load({ fetch }) {
	return (await fetch(`/videos.json`)).json();
}
