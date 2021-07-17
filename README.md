# Book It

A book search engine with a simple and convenient user interface for finding your next read. More than just a search engine...you are able to create your own 
personal account where you can save and keep track of books you'd like to read in the future, thereby creating your own virtual "To Read" collection.

## Features and How To Use

### Landing Page
When the search engine is loaded, you are presented with options to 
* `Search for Books`
* `Login/Signup` 
*  Use an input field to search for books and a `Submit Search` button.

![screencapture-masuamah-book-it-herokuapp-2021-07-17-16_16_35](https://user-images.githubusercontent.com/77217156/126048488-31b84463-a810-4fab-9282-9e407fd19484.png)

### Search for Books
Use the input field to enter a book name, keywords, or author name to find your next read. Click `Submit Search` and be presented with a catalogue of books including the book’s title, author, description, image, and a link to that book on the Google Books site, all provided by the Google Books API. You can search for books whether you are logged in or logged out, however you can only save books while logged in.

![screencapture-masuamah-book-it-herokuapp-2021-07-17-16_22_02](https://user-images.githubusercontent.com/77217156/126048557-4181074d-fe4c-4346-851e-c603d0cb73d6.png)

### Login
Click on the `Login/Signup` menu option. A modal appears on the screen with a toggle between the option to log in or sign up.
* When the toggle is set to `Signup`, you are presented with three inputs for a username, an email address, and a password, as well as a signup button.
* When the toggle is set to `Login`, you are presented with two inputs for an email address and a password, as well as a login button
* When you enter a valid email address and create a password and click on the signup button, your user account is created and you are logged in to the site
* When  you enter your account’s email address and password and click on the login button, the modal closes and I am logged in to the site
* When you are logged in to the site, the menu options change to `Search for Books`, an option to `See Your Books`, and `Logout`

![screencapture-masuamah-book-it-herokuapp-2021-07-17-16_16_15](https://user-images.githubusercontent.com/77217156/126048492-3ea3a0e3-e9c6-4321-807a-9ebaf2a27e6a.png)

### Save Books
When logged in a book search will not only present you with a catalogue of books but also the option to save them. To save a book, click `Save this Book!`, 
and to see your saved books click `See Your Books` in in the navigation bar.

![screencapture-masuamah-book-it-herokuapp-2021-07-17-16_14_19](https://user-images.githubusercontent.com/77217156/126048518-c3a8bca1-bc48-4303-a393-b502dcf2cd1a.png)

### Personal Catalogue
Clicking on the `See Your Books` option will present you with your own personal catalogue. In this catalogue you will be presented with your saved books 
including the book’s title, author, description, image, a link to that book on the Google Books site, and a button to remove a book from your account.


![screencapture-masuamah-book-it-herokuapp-saved-2021-07-17-16_18_09](https://user-images.githubusercontent.com/77217156/126048587-1aedcaf8-37b7-4880-a022-98b614348eb8.png)

### Remove Book from Personal Catalogue
Click on the `Delete this Book!` button on a book to delete a book from your saved books list.


### Logout
Click on the Logout button to logout. Once logged out of the site, you are presented with a menu with the options `Search for Books` and 
`Login/Signup` and an input field to search for books and a submit button. 

## Built With
* MongoDB
* Express.js
* Reactjs
* Node.js
* GraphQL

## Website
https://masuamah-book-it.herokuapp.com/

## Contributors
Michelle Asuamah

## Contact
If you would like to contact me you can reach me at michey.asmah21@gmail.com.

