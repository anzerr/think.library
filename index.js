
class Think {

	constructor(callback, time) {
		this._callback = callback;
		this._time = time;
		this._running = true;
		this._i = 0;
		this._lastTick = setTimeout(() => {
			this._run();
		}, this._time);
	}

	stop() {
		this._running = false;
		clearTimeout(this._lastTick);
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
			clearTimeout(this._lastTick);
			return;
		}

		let tmp = this._callback(), i = this._i;
		if (tmp instanceof Promise) {
			tmp.then(() => {
				this._lastTick = setTimeout(() => {
					if (i === this._i) {
						this._i += 1;
						this._run();
					}
				}, this._time);
			}).catch(() => {
				this._lastTick = setTimeout(() => {
					if (i === this._i) {
						this._i += 1;
						this._run();
					}
				}, this._time);
			});
		} else {
			this._lastTick = setTimeout(() => {
				if (i === this._i) {
					this._i += 1;
					this._run();
				}
			}, this._time);
		}
	}

}

module.exports = Think;
module.exports.default = Think;
