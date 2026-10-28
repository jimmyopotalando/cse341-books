# Week 01 Reflection

1. Include a link to one of your Pull Requests (PRs) at GitHub. (It should be merged and closed at this point.)
GitHub Pull Request Link: https://github.com/jimmyopotalando/cse341-books/pull/7

2. Include a link to one of your Issues at GitHub. (It should be closed at this point.)
GitHub Issue Link: https://github.com/jimmyopotalando/cse341-books/issues/3

3. Which issue took more or less time than expected? Why?
Answer: The MongoDB connection issue took longer than expected because I had to configure environment variables correctly and whitelist Render’s IP addresses in MongoDB Atlas. This required extra troubleshooting and testing.

4. Include a link to your walk-though video. (It must include your name, show your web service working at Render, explain the way your `Get Single Book` controller works, and discuss status codes.)
Video link: https://youtu.be/your-video-id

5.a. Include a GitHub link to a file that shows how your app uses sensitive data, such as the MongoDB connection string.
GitHub link: https://github.com/jimmyopotalando/cse341-books/blob/main/db/connection.js

5.b. How did you store sensitive data? Why is that approach important?
Answer: I stored sensitive data in environment variables using a `.env` file. This is important because it prevents secrets from being committed to GitHub and allows different values for local and production environments.

6.a. Include a GitHub link to a file that shows one other implementation decision you made.
GitHub link: https://github.com/jimmyopotalando/cse341-books/blob/main/server.js

6.b. What decision does this file show, and why did you make that choice?
Answer: This file shows my decision to structure the app with separate routes for `/books` and `/books/:id`. I made this choice to follow RESTful design principles and keep the code modular, which makes it easier to extend later.

7. What is one specific habit or process you will work on for next week?
Answer: Next week, I will focus on writing clearer commit messages and keeping each commit small and focused. This will improve my Git history and make it easier to track changes during code reviews.

