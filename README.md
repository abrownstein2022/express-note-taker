# Note Taker Application with Express deployed on Heroku
![license](https://img.shields.io/badge/license-MIT-black)

Deployed Link on Heroku:
https://ch11-express-note-taker.herokuapp.com

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [How-to-Contribute](#how-to-contribute)
- [Tests](#test-instructions)
- [Questions](#questions)

## Description
This application, called Note Taker, can be used to write and save notes.

It uses an Express.js back end and saves and retrieves note data from a JSON file, and is deployed on Heroku.

**User Story**

```md

AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete

```

```md

**Acceptance Criteria**
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column

```

## Installation
<!-- audience is other developers -->
**Note: In package.json, peer dependencies already exist for dotenv, mysql2, sequelize, nodemon and dates-fns so you do not have to install these packages. You should have mysql already installed on your computer.**

1. Clone this GitHub repo https://github.com/abrownstein2022/proj2-restaurant-mgmt-sys:
<!-- Check out the gh cli tool from github -->
```bash
$ gh repo clone /abrownstein2022/proj2-restaurant-mgmt-sys
```
2. From the terminal, install npm:

```bash
$ npm install
```

3. Log into mysql, create the database on your local machine and seed the database:

```bash
$mysql -u root -p < db/schema.sql
$npm run seed-database
```

<!-- [] implies user input 
 mysql> restaurant_mgr < C:\[filename].sql
-->

4. Start the local server and watch for file changes to automatically restart server:
```bash
$ npm run watch 
```

5. Open Express or a browser to test any changes you make to the application after cloning.

## Usage

```md
For the purposes of this exercise:
1. This application is used by one restaurant called "Group 5's Burgers and Fries".
2. This restaurant only accepts online orders.

To use this application, go to the Terminal and type 'npm run watch' and press enter.

A login screen appears for the customer to enter their login and password, or register as a new customer.  

Once logged in, the customer is sent to the landing page with 3 buttons: "Place Order",
"View My Past Orders" and "Logout".  

"Place Order' button
1. Customer see a page to select different food items, and a quantity for each item. 
2. The item price is displayed under each food item name.    
3. Customers can enter as many order lines as they want.
4. Customers see their order items to the right of the page under "Your Order" and a total order cost.
5. When customers are done creating their order, they click the "Place Order" button, and their order data is created in the database, and they are automatically sent to the "View Past Orders" page.
6. If customers do not want to place the order once on the order page, they can press the "Back To Homepage" button to close this screen and return to the landing page.

"View Past Orders" button
1. Customers see only their past order information.
2. Customers press the "Return To Homepage" button to close this screen and return to the landing page.

"Logout" button
1. Customers press this button to securely log out of the application.

**Please review to the screenshots below to view our application:**
```
![example image welcome page with login and register links](./public/images/welcome-page.jpg)

![example image login page](./public/images/login-page.jpg)

![example image register page](./public/images/register-page.jpg)

![example image landing page](./public/images/landing-page.jpg)

![example image place order page menu](./public/images/place-order-page.jpg)

![example image place order page order details](./public/images/your-order.jpg)

![example image view past orders page](./public/images/view-orders-page.jpg)

![example image view logout page](./public/images/logout-page.jpg)

## Credits

```md
Alexis Brownstein and bootcamp tutor: Phil
```

## License

 ```md
 MIT 
```

Link to license text:
https://opensource.org/licenses/mit-license


![badge](https://img.shields.io/badge/license-mit-black)


## Features

<!-- 
# h1
###### h6
**bold**
*italic*
_underline_

| key | value |
|-|-|
| name | 'bob' |


- list
- items

1. numberd
1. list
1. all ones - auttomatic numbering
Feattures for *future* development
 -->
**The main features in this project are:**<br>
1. Node.js and Express.js to create a RESTful API
1. Handlebars.js as the template engine
1. MySQL and the Sequelize ORM for the database
1. Both GET and POST routes for retrieving and adding new data (create customer registration and order data in database, view order data)
1. Dates-fns to format the order date in vieworder.handlebars (https://date-fns.org/)
1. Nodemon for testing to automatically restart the local server when it detects changes made to files
1. Folder structure that meets the MVC paradigm
1. Authentication (express-session and cookies in login and registration pages)
1. Protect API keys and sensitive information with environment variables
1. Deployed using Heroku (with data)
1. Polished UI
1. Interactive and responsive design
1. Meets good-quality coding standards 
1. Professional README

**Future Development Features**<br>
If we had more time to complete this school project, we would like to have made the following enhancements to our application:

1. Add logic for customers to update their own data
1. Add logic for employers to use the application to update food and beverage items, and order and customer data
1. Add logic for the application to handle multiple restaurants
1. Add logic for phone and delivery orders
1. Capture more field values in each database table
1. Check for username already existing before allowing a new username and password to be saved
1. Add “forgot password” logic
1. Improve order page by dynamically getting item_id values


## How-to-Contribute

N/A

## Test Instructions

N/A

## Questions

Feel free to contact us with any questions.

We can be reached at alexis@drdatabase.com.

This GitHub repo can be found at:
  
https://github.com/abrownstein2022/proj2-restaurant-mgmt-sys
 
