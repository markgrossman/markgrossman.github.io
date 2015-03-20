var app = angular.module("intelliJHelp", []);


app.controller("emailController", function($scope, emailService) {
	this.email = "";
    $scope.submitEmail = function() {
        emailService.sendEmail(this.email)
        this.email = "";
    };
});

app.service("emailService", function($http, $q) {
  this.sendEmail = function (email) {
    $http.post('https://powerful-temple-5775.herokuapp.com/email', email).success(function() {
      console.log("It sent!!!");
    });
  }
});