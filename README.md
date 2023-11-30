# Grocery and Meal Planner
An all-in-one resource to coordinate your weekly meals and grocery list. 

Link to project: 

## How It's Made:

**Tech used:** Node.js, Express, MongoDB, Tailwind

In developing this web application, our primary emphasis was on functionality. This allowed us to focus on **CRUD** operations, data storage, and server-side logic while taking a utility-first approach to styling. 

We employed **MongoDB** to manage JavaScript objects seamlessly. Our database is structured with two collections: one for the users' meal plan and another for their grocery list. We enhanced our POST method by incorporating forms, aiming to produce well-organized documents that can be effortlessly manipulated.

(img)

By employing **‘async/await’**, we were able to streamline the handling of database queries, API requests, and enhance the overall readability and maintainability of our web application. 

![ray-so-export (1)](https://github.com/philmach2/mealplan-grocerylist/assets/110493891/6422d1e3-d0b1-4d40-bd9f-bcaa5762a514)

**Tailwind** proved to be a reliable tool in showcasing our initial MVP (Minimum Viable Product) so that users can begin establishing their weekly meals and grocery shopping while enjoying the aesthetic design.

## Lessons Learned:

Initially, we managed numerous PUT requests using forms. However, when shifting the focus to enhancing the user experience, we transitioned to handling these requests through JavaScript. This shift resulted in more robust manipulations on both the client and server code, but greatly enhanced the overall user experience. 

![ray-so-export (2)](https://github.com/philmach2/mealplan-grocerylist/assets/110493891/3063720e-b5af-4f02-ab2e-3de11bd54851)

Additionally, we began by using 'parent-nodes' and 'child-nodes' to target elements in the DOM. However, this approach grew more complex and difficult to read in the codebase. Simplifying our strategy, we leveraged a few more classes on specified elements, resulting in significantly improved code readability.


