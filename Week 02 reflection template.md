# Week 02 Reflection

## Links

1. Provide your walk-through video link. This video must demonstrate your API working at Render and follow the script in the assignment.
Video link:https://youtu.be/bEd9McthuFo

2. Provide a link to your deployed Render api-docs URL:
Render link: https://cse341-books-n4hr.onrender.com/api-docs/

3. Provide links to your Pull Requests (they should be merged at this point):
Books PR:https://github.com/jimmyopotalando/cse341-books/pull/12
Authors PR:https://github.com/jimmyopotalando/cse341-books/pull/11

4. Provide links to your GitHub Issues (they should be closed at this point).
Books Issue: https://github.com/jimmyopotalando/cse341-books/issues/9


Authors Issue:https://github.com/jimmyopotalando/cse341-books/issues/10



## Plan vs. Implementation

5. Which part of the work took more or less time than expected? Why?

Answer:The part that took more time than I expected was implementing the Author API and connecting it to the Books API using the authorId relationship. I had to create a new MongoDB collection, build model and controller functions add Swagger documentation and test each route. I also spent extra time managing Git branches, pull requests and resolving workflow issues. The Book API implementation took less time because I was able to reuse the same patterns I had already established while building the Author API.

6. How did Swagger help you in your work this week?

Answer:Swagger helped me test and verify every API route directly from the browser. I used it to send GET, POST, PUT and DELETE requests without needing additional tools. It also helped me confirm that my request bodies, status codes and responses matched my specification. When I encountered errors, Swagger made it easier to identify and fix problems quickly because I could test changes immediately after updating my code.

## Week 03 Improvement

7. What is one specific habit or process you will apply next week?

Answer:One habit I will apply next week is testing each route immediately after implementing it instead of waiting until several routes are finished. This approach helped me find errors faster during Week 02 and I believe it will make debugging easier and reduce the chances of introducing multiple problems at the same time.
