
### `Intro`
setInterval that waits for promises between ticks

``` bash
npm install --save git+https://github.com/anzerr/think.library.git
npm install --save @anzerr/think.library
```

### `Example`

``` javascript
const Think = require('think.libary');

let wait = () => {
	return new Promise((resolve) => {
		setTimeout(resolve, 1000);
	});
};

let i = 0;
const t = new Think(() => {
	console.log('tick', i);
	if (i > 10) {
		t.stop();
	}
	t.start(); // should do nothing
	i += 1;
	return wait();
}, 100);
```