import { User } from './user'

export class Blog {
    id: Number;
    title: String;
    content: Object;
    totalLikes: number = 0;
    lastUpdate: String;
    author: User;

    constructor(id: Number, title: string, content: string, totalLikes: number, 
                lastUpdate: String, author: User) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.totalLikes = totalLikes;
        this.lastUpdate = lastUpdate;
        this.author = author;
  }

}
