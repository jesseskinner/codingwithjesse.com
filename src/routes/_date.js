export function formatDate(time) {
	const date = new Date(time);

	return `${getMonthName(date)} ${getDayOfTheMonthWithOrdinal(
		date
	)}, ${date.getFullYear()}`;
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

export const months = [
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
	'December',
];

function getMonthName(date) {
	return months[date.getMonth()];
}
