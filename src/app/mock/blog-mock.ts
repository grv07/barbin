import { Blog } from '../model-classes/blog';
import { USERS } from './user-mocks'

const content = "We are big fans of the Django admin interface. It's a huge selling point for Django as it takes the load off developing a 'back office' for support and day to day operations."+
 "**In the last post we presented a pattern we use often in our Django models. **We used a bank account application with an Account and account Action models to demonstrate the way we handle common issues such as concurrency and validation. The bank account had two operations we wanted to expose in the admin interface-deposit and withdraw."

export const BLOGS: Blog[] = [
    new Blog(21, 'How to install django and start a project ?', 
        content, 0,'Nov 2, 2016 . 7 min', USERS[0]),

    new Blog(22, 'How to install django and start a project ?', 
        content, 0,'Nov 2, 2016 . 7 min', USERS[1]),

    new Blog(23, 'How to install django and start a project ?', 
        content, 0,'Nov 2, 2016 . 7 min', USERS[2]),

    new Blog(24, 'How to install django and start a project ?', 
        content, 0,'Nov 2, 2016 . 7 min', USERS[3]),

    new Blog(25, 'How to install django and start a project ?', 
        content, 0,'Nov 2, 2016 . 7 min', USERS[3]),    

]
