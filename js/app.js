var app = angular.module("intelliJHelp", []);


app.controller("emailController", function($scope, emailService) {
    this.email = {};
    $scope.submitEmail = function() {
        if ($scope.emailForm.$valid) {

            emailService.sendEmail(this.email)

            $scope.emailForm.$setPristine();
            alertSuccess();
            this.email = {};
        }

        function alertSuccess(argument) {
            $('#success').html("<div class='alert alert-success'>");
            $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                .append("</button>");
            $('#success > .alert-success')
                .append("<strong>Your message has been sent. </strong>");
            $('#success > .alert-success')
                .append('</div>');
        }
    };
});

app.service("emailService", function($http, $q) {
    this.sendEmail = function(email) {
        $http.post('https://powerful-temple-5775.herokuapp.com/email', email).success(function() {
            console.log("It sent!!!");
        });
    }
});