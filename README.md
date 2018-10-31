# Project 3 - Light Camera Drive
## Team Members
* Rick / Michael / Anitha

## SYNOPSIS: An app that helps film producers find specific types of cars for movie shooting. The website is built using the MEAN stack: Mongoose, Express, Angular, and Node.js.

### Live Site: https://lights-camera-drive.herokuapp.com/
### Git repo link: https://github.com/nibblet787/lights-camera-drive


## Site structure
* Cars Listing page:
  * Displays all car listings.
  * Each entry has a make, model, year, color, image, contact email, notes and availability.
    * Though, a non-account holder is restricted to a view a car's image, make, model and model year.
* Splash page/ Landing page with a banner.

##  Technical details:
* Main acMongo dB : lights-camera-drive
* Two separate collections:
  * cars for storing all the listing
  * users for storing the user login information
* CSS framework - Skeleton
* Technology - Angular JS, Node, Mongoose, Express, Html and CSS

## CURD path:
* An index page that displays the navigation partial and body div where each partials loads.
* View Partial - display all cars listing
* Create Partial - user creation/signup form 
* Login Partial - user can login to their account using login form
* Add Partial - logged in user can add new listing.
* Edit Button - logged in user can edit an existing listing.
* Delete Button - logged in user can delete a listing.
* Seed Button - used to seed listing from seed model file.


## Authorization
* Included sign up/log in functionality for user, with encrypted passwords using bcrypt & an authorization flow

## Project Management 
* We used git issues and waffle.io


## Technical challenges:
* Merging each team members work to the dev branch in git without causing major conflicts.
* Heroku push not possible by all members caused dependencies.
* Heroku kept crashing as soon as a wrong login credential was entered.
* Seed button would add listings but would not automatically refresh view page.

## Future enhancements
* Adding searching, sorting and filter listing functionality.
* Functionality to see availability of a car during weekends/weekdays.
* Add review/likes for seller.
* Clicking a car listing would expand all the car in the row. This needs to be fixed.
* Add second login for end user not seller. End user can only see contact information of a car listing but cannot add/delete or edit.
* Once a user selects a listing, they must be able to send an email to the seller.


## Key Learning:
* Being able to use secret keyword in .env as well as on the Heroku config page
* Using partials to be able to give a multipage website feel.
