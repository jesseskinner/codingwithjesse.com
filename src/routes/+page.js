export async function load({ fetch }) {
	const res = await fetch('/homepage.json');
	return await res.json();
}
