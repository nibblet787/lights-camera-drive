# Project 3 - Light Camera Drive
## An app that helps producer find cars for movice shooting. The website is built using the MEAN stack: Node.js, Mongoose, Express and Angular.

### Live Site: https://lights-camera-drive.herokuapp.com/
### Git repo link: https://github.com/nibblet787/lights-camera-drive
## Team Member
* Rick / Michael / Anitha

## Site structure
* Cars Listing page:
  * That displays all the cars listing.
  * Each package has a make, model, year, color, image, email, notes and availabity.
  * By default a customer can only view car make, model and image.
* Splash page/ Landing page with a banner.

##  Technical details:
* Main mongo db : lights-camera-drive
* Two separate collections:
  * cars for storing all the listing
  * users for storing the user login information
* CSS framework - Skeleton
* Technology - Angular JS, Node, Mongoose, Express, Html and CSS

## CURD path:
* An index page that displays the navigtion partial and body div where each partials loads.
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


##  Technical challenges:
* Merging each team members work to the dev branch in git without causing major conflicts.
* Heroku push not possible by all members caused dependancies.
* Heroku kept crashing as soon as a wrong login credential was entered.
* Seed button would add listings, but would not automatically refresh view page.

## Future enhancements
* Adding seraching, sorting and filter listing functionality.
* Functinality to see availability of a car during weekends/weekdays.
* Add review/likes for seller.
* Clicking a car listing would expand all the car in the row. This needs to be fixed.
* Add second login for end user not seller. End user can only see contact information of a car listing but cannot add/delete or edit.
* Once a user selects a listing, they must be able to send an email to the seller.


##  Key Learning:
* Being able to use secret keyword in .env as well as on the heroku config page
* Using partials to be able to give a multipage website feel.
