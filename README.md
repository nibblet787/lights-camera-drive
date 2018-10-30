# Project 3 - Light Camera Drive
## An app that helps film producers find cars for movie shooting. The website is built using the MEAN stack: Mongoose, Express, Angular, and Node.js

### Live Site: https://lights-camera-drive.herokuapp.com/

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
