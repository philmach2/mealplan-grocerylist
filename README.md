# Grocery and Meal Planner
An all-in-one resource to coordinate your weekly meals and grocery list. 

Link to project: 

## How It's Made:

**Tech used:** Node.js, Express, MongoDB, Tailwind

In developing this web application, our primary emphasis was on functionality. This allowed us to focus on **CRUD** operations, data storage, and server-side logic while taking a utility-first approach to styling. 

We employed **MongoDB** to manage JavaScript objects seamlessly. Our database is structured with two collections: one for the users' meal plan and another for their grocery list. We enhanced our POST method by incorporating forms, aiming to produce well-organized documents that can be effortlessly manipulated.

![ray-so-export (2)](https://github.com/philmach2/mealplan-grocerylist/assets/110493891/83828870-2e1e-499f-88d7-3834cf29205d)

By employing **‘async/await’**, we were able to streamline the handling of database queries, API requests, and enhance the overall readability and maintainability of our web application. 

![ray-so-export (1)](https://github.com/philmach2/mealplan-grocerylist/assets/110493891/b712a473-9386-4c11-8d77-3cb3a047f7c4)

**Tailwind** proved to be a reliable tool in showcasing our initial MVP (Minimum Viable Product) so that users can begin establishing their weekly meals and grocery shopping while enjoying the aesthetic design.

## Lessons Learned:

Initially, we managed numerous PUT requests using forms. However, when shifting the focus to enhancing the user experience, we transitioned to handling these requests through JavaScript. This shift resulted in more robust manipulations on both the client and server code, but greatly enhanced the overall user experience. 

![ray-so-export](https://github.com/philmach2/mealplan-grocerylist/assets/110493891/5c0b32bd-d2fc-43a3-9851-2d235a84f10f)

Additionally, we began by using 'parent-nodes' and 'child-nodes' to target elements in the DOM. However, this approach grew more complex and difficult to read in the codebase. Simplifying our strategy, we leveraged a few more classes on specified elements, resulting in significantly improved code readability.


