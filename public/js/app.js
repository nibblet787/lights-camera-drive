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
            url:'/app'
        }).then(function(response){
            controller.loggedInUsername = response.data.username;
        })
    }



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


  }])
