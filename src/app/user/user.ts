export class User {
	numPosts?: number;
	enabled?: boolean;
	bannedUntil?: Date;

	constructor(
		public id: number,
		public username: string,
		public email: string,
		public dob: Date,
		public country?: string,
		public firstname?: string,
		public lastname?: string
	) {	}
}
