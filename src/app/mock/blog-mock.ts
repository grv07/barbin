import { Blog } from '../blog';

const content = "We are big fans of the Django admin interface. It's a huge selling point for Django as it takes the load off developing a 'back office' for support and day to day operations."+
 "In the last post we presented a pattern we use often in our Django models. We used a bank account application with an Account and account Action models to demonstrate the way we handle common issues such as concurrency and validation. The bank account had two operations we wanted to expose in the admin interface-deposit and withdraw."

export const BLOGS: Blog[] = [
    {'id': 23, 'title': 'How to install django and start a project ?', 'content': content},
    {'id': 24, 'title': 'How to install pyhon and start a project ?', 'content': content},
    {'id': 25, 'title': 'How to install terminator and start a project ?', 'content': content},
    {'id': 26, 'title': 'How to install python3.6 and start a project ?', 'content': content},
    {'id': 27, 'title': 'How to install tornado and start a project ?', 'content': content},
]
