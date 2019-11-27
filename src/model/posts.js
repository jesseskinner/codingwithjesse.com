let postsPromise;

export function getAllPosts() {
	if (!postsPromise) {
		postsPromise = fetch('/admin/api/posts');
	}
	return postsPromise;
}

export function getPost(id) {
	id = +id;
	return getAllPosts().then(posts => posts.find(post => post.id === id));
}

export function formatDate(timestamp) {
	const date = new Date(timestamp * 1000);

	return `${getMonthName(date)} ${getDayOfTheMonthWithOrdinal(date)}, ${date.getFullYear()}`;
}

function getDayOfTheMonthWithOrdinal(date) {
    const dayOfTheMonth = date.getDate();
    const ordinal = getOrdinal(dayOfTheMonth);

    return `${dayOfTheMonth}${ordinal}`;
}

function getOrdinal(number) {
    // using the % modulo operator to get the last digit of the number
    const lastDigitOfNumber = number % 10;

    switch (lastDigitOfNumber) {
        case 1:
            return 'st';
        case 2:
            return 'nd';
        case 3:
            return 'rd';
        default:
            return 'th';
    }
}

function getMonthName(date) {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    return months[date.getMonth()];
}