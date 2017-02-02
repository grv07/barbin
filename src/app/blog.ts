import { User } from './user'

export class Blog {
    id: Number;
    title: String;
    content: Object;
    totalLikes: number = 0;
    lastUpdate: String;
    author: User;
}
