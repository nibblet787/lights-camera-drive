# Project 3 - Light Camera Drive
## An app that helps film producers find cars for movie projects. The website is built using the MEAN stack: Mongoose, Express, Angular, and Node.js

### Live Site: https://lights-camera-drive.herokuapp.com/

## Team Member
* Rick / Michael / Anitha

## Site structure
* Splash page/ Landing page with a banner.
* Cars Listing page:
  * Displays all car listings.
  * Each package has a make, model, year, color, image, email, notes and availability.
  * By default, a customer can only view a car's image, make, model, and model year.
  

##  Technical details:
* Main mongo db : lights-camera-drive
* Two separate collections:
  * "cars" for storing all the listings
  * "users" for storing the user login information
* CSS framework - Skeleton
* Technology - Angular JS, Node, Mongoose, Express, Html and CSS

## CURD path:
* An index page that displays the navigation partial and body div where each partial loads.
* View Partial - displays all car listings
* Create Partial - user creation/signup form 
* Login Partial - user can login to their account using login form
* Add Partial - logged-in user can add new listing
* Edit Button - logged-in user can edit an existing listing
* Delete Button - logged-in user can delete a listing
* *Development Tool* Seed Button - used to seed listing from seed model file 
