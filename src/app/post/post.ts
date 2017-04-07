import { User } from '../user/user';

export class Post {
	constructor(
		public id: number,
		public subject: string,
		public content: string,
		public author: User,
		public created: Date,
		public numPrints?: number) { }
}
