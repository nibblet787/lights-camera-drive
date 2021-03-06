# Project 3 - Light Camera Drive
## Team Members
* Rick / Michael / Anitha

## *SYNOPSIS:* An app that helps film producers find specific types of cars for movie shooting. The website is built using the MEAN stack: Mongoose, Express, Angularjs, and Node.js.

### Live Site: https://lights-camera-drive.herokuapp.com/
### Git repo link: https://github.com/nibblet787/lights-camera-drive


## Site structure
* Splash page/ Landing page with a banner.
* Cars Listing page:
  * Displays all car listings.
  * Each entry has a make, model, year, color, image, contact email, notes and availability.
    * Though, a non-account holder's view is restricted to a car's image, make, model and model year.

## Technical details:
* Main Mongo dB : lights-camera-drive
* Two separate collections:
  * "cars" for storing all the listings
  * "users" for storing the user login information
* CSS framework - Skeleton
* Technology - Angularjs, Node, Mongoose, Express, Html and CSS

## CRUD features:
* An index page that displays the navigation partial and body div where each partial loads.
* View Partial - displays all car listings
* Create Partial - user creation/signup form 
* Login Partial - user can login to their account
* Add Partial - logged-in user can add a new car listing
* Edit Button - logged-in user can edit an existing listing.
* Delete Button - logged-in user can delete a listing
* ***DEVELOPMENT TOOL:*** Seed Button - used to seed the listing from a seed model file


## Authorization
* Included sign up/log in functionality for user, with encrypted passwords using bcrypt & an authorization flow

## Project Management 
* Tracked via git issues and waffle.io


## Technical challenges:
* Merging each team members work to the dev branch in git without causing major conflicts.
* Heroku kept crashing as soon as a wrong login credential was entered.
* Seed button would add listings but would not automatically refresh view page.

## Future enhancements
* Add search, sort, and filter functionality.
* Functionality to see availability of a car during weekends/weekdays.
* Add review/likes for a particular car owner.
* Add second login for film producers. This user can only see contact information of a car listing but cannot add/delete or edit.
* Once a user selects a listing, they are able to send an email directly to the car owner from the website.


## Key Learning:
* Being able to use secret keyword in .env as well as on the Heroku config page
* Using partials to be able to give a multipage website feel.
