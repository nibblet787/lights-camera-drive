const app = angular.module('MovieCars', []);

app.controller('MovieCarController', ['$http', function($http){

  //----------Partials
  this.includePath = './partials/view.html';
  this.changeInclude = (path) => {
  this.includePath = './partials/'+ path +'.html';
  }
  //----------
  this.make= "";
  this.model= "";
  this.year= "";
  this.color= "";
  this.tags= "";
  this.image= "";
  this.note= "";
  this.username = '';
  this.password ='';
  this.email='';
  this.availability= false;
  const controller = this;
  this.indexOfEditFormShow = 0;


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
        email: this.email,
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
        controller.email= "";
        controller.availability= false;
        controller.cars.unshift(response.data)
        controller.getCars();
        controller.includePath = './partials/view.html';
    }, function(){
        console.log('error');
    });
  }

  this.createCarSeed = function(){
    $http({
      method:'POST',
      url: '/cars/seed',
    }).then(function(response){
        controller.includePath = './partials/home.html';
    }, function(){
        console.log('error');
    });
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
      //  tags: this.editedTags,
        image: this.editedImage,
        notes: this.editedNotes,
        email: this.editedEmail,
        availability: this.editedAvailability
      }
    }).then(function(response){

      controller.getCars();
      controller.make= "";
      controller.model= "";
      controller.year= "";
      controller.color= "";
    //  controller.tags= " ";
      controller.image= "";
      controller.note= "";
      controller.availability= false;
    }, error => {
      console.log(error);
    })
  };





/********* Create User  ********/
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
      controller.includePath = './partials/home.html';
      controller.username= "";
      controller.password= "";
  })
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
            controller.includePath = './partials/view.html';
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
    this.showWhenLoggedIn = false;
    // this.car = {};

    this.toggleAddCar = function(){
        this.showAddCar =  !this.showAddCar;
    };
    this.toggleEdit = function($index){
      this.indexOfEditFormShow = $index;
      console.log(this.indexOfEditFormShow);
        this.showEdit = !this.showEdit;
    };
    this.toggleLogin = function(){
        this.showLogin = !this.showLogin;
    };
    this.toggleCreate = function(){
        this.showCreate = !this.showCreate;
    };
    this.toggleInfo = function($index){
        if(this.showWhenLoggedIn === true){
          this.indexOfEditFormShow = $index;
          this.showInfo = !this.showInfo
        }
    };
    this.toggleWhenUserIsLoggedIn = function(){
        this.showWhenLoggedIn = !this.showWhenLoggedIn;
    };

// "ctrl.toggleEdit()"

  this.getCars();
}]);
