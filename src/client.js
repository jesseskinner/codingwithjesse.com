if (/\/(newsletter|blog\/(search|buzzword-hellfire))/.test(location.pathname)) {
	import('@sapper/app').then(sapper =>
		sapper.start({
			target: document.querySelector('body'),
		})
	);
}
