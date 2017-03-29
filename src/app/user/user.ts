export class User {
	numPosts: number;
	enabled: boolean;
	bannedUntil: Date;

	constructor(
		public id: number,
		public username: string,
		public email: string,
		public dob: Date,
		public firstname?: string,
		public lastname?: string,
		public country?: string
	) {	}
}
