# :computer: Atlan Frontend Task:
<strong> Link to the application: https://atlan-front-end-assignment.vercel.app/</strong>
<br>

## Introduction

The given application is developed as a frontend task for Atlan. It enables users to run SQL queries in an online editor, and analyze the output obtained as a result of running the queries.

## Data 
The data used in the application is obtained from https://github.com/graphql-compose/graphql-compose-examples/tree/master/examples/northwind/data/csv, a github repository for mock data. 

We are fetching the data of different tables through this link only. Data is not downloaded in any form.

## Technologies used

>1. ReactJs
>2. CSS and JavaScript

## Working

1. You can go to the editor page by clicking the Start Coding Now Button or By clicking SQL Editor on the navbar.

2. The SQL editor page has different sections; on the top, you have been given different common Query words, which you can click to use. Similarly, there is also a section in which all the tables names have been mentioned, and You can directly click and use those tables.

3. Then, on the rightmost section, I have provided an area in which all the Recent queries will appear. Also, below that is a section containing all the commands that will be Working in this SQL Editor.
    <br/>List of all queries that can run in the editor are:

```bash
   1. select * from employee_territories
   2. select * from employees
   3. select * from categories
   4. select * from customers
   5. select * from order_details
   6. select * from orders
   7. select * from regions
   8. select * from shippers
   9. select * from suppliers
  10. select * from territories
```

## Optimisation

For all the page optimization analysis, I have used <strong>Google's Lighthouse tool</strong> and <strong>Page Speed Insights</strong> to analyze the page load time, along with how well it performs as per web standards.

1. I have made the application into a <strong>PWA(Progressive Web App)</strong> so that it can be optimized as Google is promoting the use of such Installable apps. This also allows the web app to be used offline as it <strong>can be installed</strong>.

2. The website is responsive to a great extent, even though such an application is not very likely to be used on mobile devices. <strong>Absolute sizing is not used</strong> as much as possible and in turn, sizing units like <strong>em, rem, vh, and vw</strong> are used. <strong>Media queries</strong> have been used at most places.

3. The website is hosted on Vercel, which is considered to be one of the fastest free hosting mechanisms for JavaScript based Web apps due to it's CDN and caching benefits. It also provides a free SSL during hosting that is generally better for page security and ranking.

4. React lazy loading has been used for loading parts of the page not immediately required in the background.

5. Minimal dependencies have been used for the creation of the page.

6. Restructured code to reuse components & used minimal imports where necessary.

## Screenshots

<img width="720" alt="Screenshot 1" src="https://github.com/adityaraj0109/Atlan-FrontEnd-Assignment/blob/master/src/assets/Screenshot/Screenshot%20(400).png">
<img width="720" alt="Screenshot 2" src="https://github.com/adityaraj0109/Atlan-FrontEnd-Assignment/blob/master/src/assets/Screenshot/Screenshot%20(401).png">
<img width="720" alt="Screenshot 3" src="https://github.com/adityaraj0109/Atlan-FrontEnd-Assignment/blob/master/src/assets/Screenshot/Screenshot%20(402).png">
<img width="720" alt="Screenshot 4" src="https://github.com/adityaraj0109/Atlan-FrontEnd-Assignment/blob/master/src/assets/Screenshot/Screenshot%20(403).png">
<img width="720" alt="Screenshot 5" src="https://github.com/adityaraj0109/Atlan-FrontEnd-Assignment/blob/master/src/assets/Screenshot/Screenshot%20(404).png">

## Website optimization analysis screenshots
<img width="720" alt="Screenshot 6" src="https://github.com/adityaraj0109/Atlan-FrontEnd-Assignment/blob/master/src/assets/Screenshot/Screenshot%20(406).png"> 
<img width="720" alt="Screenshot 7" src="https://github.com/adityaraj0109/Atlan-FrontEnd-Assignment/blob/master/src/assets/Screenshot/Screenshot%20(398).png"> 
<img width="720" alt="Screenshot 8" src="https://github.com/adityaraj0109/Atlan-FrontEnd-Assignment/blob/master/src/assets/Screenshot/Screenshot%20(399).png"> 
<img width="720" alt="Screenshot 9" src="https://github.com/adityaraj0109/Atlan-FrontEnd-Assignment/blob/master/src/assets/Screenshot/Screenshot%20(407).png"> 
