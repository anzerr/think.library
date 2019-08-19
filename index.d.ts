
export default class Think {

	constructor(cd: () => Promise<any> | void, time: number);

	stop(): Think;
	start(): boolean;

}