const app = angular.module('MovieCars', [])

app.controller('MovieCarController', ['$http', function ($http) {

    this.logIn = function(){
        $http({
            method:'POST',
            url:'/sessions',
            data: {
                username:this.username,
                password:this.password
            }
        }).then(function(response){
            console.log(response);
        })
    }

    const controller = this;
    this.getCars = function(){
        $http({
            method:'GET',
            url:'/cars'
        }).then(function(response){
            controller.loggedInUsername = response.data.username;
            this.cars = response.data // Added by Rick
          }, error=>{
              console.log(error);
          })
      };



  this.createUser = function(){
      $http({
          method:'POST',
          url:'/users',
          data: {
              username: this.username,
              password: this.password
          }
      }).then(function(response){
          console.log(response);
      })
  }

  this.addCar = function(){ // Function added by Rick
          $http({
              method: 'POST',
              url: '/cars',
              data: {
                  make: this.newMake,
                  model: this.newModel,
                  year: this.newYear,
                  color: this.newColor,
                  tags: this.newTags,
                  image: this.newImage,
                  notes: this.newNotes,
                  availability: this.newAvailability
              }
          }).then(response=>{
              this.getCars();
          }, error=>{
              console.log(error);
          })
      };

  }])
