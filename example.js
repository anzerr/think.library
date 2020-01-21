
let wait = () => {
	return new Promise((resolve) => {
		setTimeout(resolve, 1000);
	});
};

const Think = require('./index.js');

let i = 0;
const t = new Think(() => {
	console.log('tick', i);
	if (i > 10) {
		t.stop();
	} else {
		t.start(); // should do nothing
	}
	i += 1;
	return wait();
}, 100);
