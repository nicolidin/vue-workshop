export default class TaskModel {
	id!: number;
	title!: string;
	description!: string;

	constructor(title: string, description: string) {
		this.id = new Date().getUTCMilliseconds();
		this.title = title;
		this.description = description
	}
}
