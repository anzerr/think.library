
class Think {

	constructor(callback, time) {
		this._callback = callback;
		this._time = time;
		this._running = true;
		this._i = 0;
		setTimeout(() => {
			this._run();
		}, this._time);
	}

	stop() {
		this._running = false;
		return this;
	}

	start() {
		if (!this._running) {
			this._running = true;
			this._run();
			return true;
		}
		return false;
	}

	_run() {
		if (!this._running) {
			return;
		}

		let tmp = this._callback(), i = this._i;
		if (tmp instanceof Promise) {
			tmp.then(() => {
				setTimeout(() => {
					if (i === this._i) {
						this._i += 1;
						this._run();
					}
				}, this._time);
			}).catch(() => {
				setTimeout(() => {
					if (i === this._i) {
						this._i += 1;
						this._run();
					}
				}, this._time);
			});
		} else {
			setTimeout(() => {
				if (i === this._i) {
					this._i += 1;
					this._run();
				}
			}, this._time);
		}
	}

}

module.exports = Think;

