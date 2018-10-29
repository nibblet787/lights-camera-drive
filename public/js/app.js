const app = angular.module('MovieCars', []);

app.controller('MovieCarController', ['$http', function($http){
  this.make= "";
  this.model= "";
  this.year= "";
  this.color= "";
  this.tags= "";
  this.image= "";
  this.note= "";
  this.username = '';
  this.password ='';
  this.availability= false;
  const controller = this;
  this.indexOfEditFormShow = 1;


  /*********    Show route      ********/
  this.getCars = function(){
    $http({
      method:'GET',
      url: '/cars'
    }).then(function(response){
      console.log(response.data);
      controller.cars = response.data
    }, error=>{
            console.log(error);
        })
    };


  /*********    Create route      ********/
  this.createCar = function(){
    $http({
      method:'POST',
      url: '/cars',
      data: {
        make: this.make,
        model: this.model,
        year:this.year,
        color: this.color,
        tags: this.tags,
        image: this.image,
        note: this.note,
        availability: this.availability,
      }
    }).then(function(response){
        controller.make= " ";
        controller.model= "";
        controller.year= "";
        controller.color= "";
        controller.tags= "";
        controller.image= "";
        controller.note= "";
        controller.availability= false;
        controller.cars.unshift(response.data)
        controller.getCars();
    }, function(){
        console.log('error');
    });
  }

  this.createCarSeed = function(){
    $http({
      method:'POST',
      url: '/cars/seed',
    }).then(function(response){
        this.getCars();
    }, function(){
        console.log('error');
    });
  }
  // <!--create User -->
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




  /*********    Delete route      ********/
  this.deleteCar = function(car){
    $http({
      method:'DELETE',
      url:'/cars/'+ car._id
    }).then(function(response){
      controller.getCars();
    })
  }

  /*********    Update route      ********/
  this.editCar = function(car){
    $http({
      method: 'PUT',
      url: '/cars/' + car._id,
      data: {
        make: this.editedMake,
        model: this.editedModel,
        year: this.editedYear,
        color: this.editedColor,
        tags: this.editedTags,
        image: this.editedImage,
        notes: this.editedNotes,
        availability: this.editedAvailability
      }
    }).then(function(response){
      response.data = {};
      // controller.make= "";
      // controller.model= "";
      // controller.year= "";
      // controller.color= "";
      // controller.tags= "";
      // controller.image= "";
      // controller.note= "";
      // controller.availability= false;
      controller.getCars();
    }, error => {
      console.log(error);
    })
  };

  this.showWhenLoggedIn = false;

this.toggleWhenUserIsLoggedIn = function(){
  this.showWhenLoggedIn = !this.showWhenLoggedIn;
}



/*********     Login function      ********/
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
            controller.toggleWhenUserIsLoggedIn();
        })
    }

  /*********     Logout function      ********/
  this.logout = function(){
        this.username = "";
        this.password = "";
        this.toggleWhenUserIsLoggedIn();
        this.getCars();
      };


    /*********    Show and Reveal Functions      ********/
    this.showAddCar = false;
    this.showEdit = false;
    this.showLogin = false;
    this.showCreate = false;
    this.showInfo = false;
    // this.car = {};

    this.toggleAddCar = function(){
        this.showAddCar =  !this.showAddCar;
    };
    this.toggleEdit = function(){
        this.showEdit = !this.showEdit;
    };
    this.toggleLogin = function(){
        this.showLogin = !this.showLogin;
    };
    this.toggleCreate = function(){
        this.showCreate = !this.showCreate;
    };

    this.toggleInfo = function(){
      this.showInfo = !this.showInfo
    }




  this.getCars();
}]);
