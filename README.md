# Note Taker Application with Express deployed on Heroku
![license](https://img.shields.io/badge/license-MIT-black)

Deployed Link on Heroku:
https://ch11-express-notes-taker.herokuapp.com

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

1. Clone this GitHub repo https://github.com/abrownstein2022/ch11-express-note-taker:
<!-- Check out the gh cli tool from github -->
```bash
$ gh repo clone /abrownstein2022/ch11-express-note-taker
```
2. From the terminal, install npm and uuid:

```bash
$ npm install
$ npm uuid
```

<!-- [] implies user input 
 mysql> restaurant_mgr < C:\[filename].sql
-->

3. Start the local server and watch for file changes to automatically restart server:
```bash
$ npm run watch 
```

4. Open Express or a browser to test any changes you make to the application after cloning.

## Usage

```md
1. Open the app using Express or Heroku (https://ch11-express-notes-taker.herokuapp.com)
2. From the landing page, click on the notes page to see a page with existing notes on the left-hand column, plus empty fields
to enter a new note title and text.
3. Press the Save icon to save this info and see it in the left-hand column.
4. When you click on the Write icon in the top navigation, I see empty fields to enter a new note title and text. 
5. Press the Delete icon to delete a note.

**Please review to the screenshots below to view the application:**
```
![example image welcome page with login and register links](./public/images/welcome-page.jpg)

![example image login page](./public/images/login-page.jpg)

![example image register page](./public/images/register-page.jpg)


## Credits

```md
Alexis Brownstein, bootcamp tutor: Phil and Wyzant tutor: Mike
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
1. Uses Express.js and uuid
1. Deployed on Heroku
1. GET, POST and DELETE routes for retrieving, adding and deleteing note data
1. Dates-fns to format the order date in vieworder.handlebars (https://date-fns.org/)
1. Necessary folder structure 
1. Professional README

## How-to-Contribute

N/A

## Test Instructions

N/A

## Questions

Feel free to contact me with any questions.

I can be reached at alexis@drdatabase.com.

This GitHub repo can be found at:
  
https://github.com/abrownstein2022/ch11-express-note-taker
 
