import { Post } from './post';
import { User } from '../user/user';

let user1 = new User(11, 'user1', 'user1@email.com', new Date('01/01/1981'));
let user2 = new User(12, 'user2', 'user2@email.com', new Date('01/01/1982'));

export var POSTS: Post[] = [
	{
		id: 10001,
		subject: 'subject1',
		content: `Lorem ipsum Magna sit aliquip cillum ad Ut officia eu 
			Ut est reprehenderit consequat ut commodo Duis non dolor Excepteur nostrud.`,
		author: user1,
		created: new Date(),
		numPrints: 111
	},
	{
		id: 10002,
		subject: 'subject2',
		content: `Lorem ipsum Magna sit aliquip cillum ad Ut officia eu 
			Ut est reprehenderit consequat ut commodo Duis non dolor Excepteur nostrud.`,
		author: user2,
		created: new Date(),
		numPrints: 222
	},
	{
		id: 10003,
		subject: 'subject3',
		content: `Lorem ipsum Magna sit aliquip cillum ad Ut officia eu 
			Ut est reprehenderit consequat ut commodo Duis non dolor Excepteur nostrud.`,
		author: user1,
		created: new Date(),
		numPrints: 333
	},
];
