exports.init = function (config) {

};

exports.query = function () {
	return new Promise(function (resolve, reject) {
		resolve([{value: '5'}]);
	});
};