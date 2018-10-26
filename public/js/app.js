const app = angular.module('MovieCars', [])

app.controller('MovieCarController', ['$http', function($http){
    const controller = this;


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



    this.getCars = function(){
        $http({
            method:'GET',
            url:'/'
        }).then(function(response){
            controller.loggedInUsername = response.data.username;
        })
    }

}])
