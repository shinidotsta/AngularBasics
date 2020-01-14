///<reference path="angular.min.js"/>
var myApp=angular.module("myModule",[]);

// var myController=function ($scope)
// {
//     $scope="angular js tutorial";
// };

myApp.controller("myController",function ($scope)
{
 var country={
     Name:"INDIA",
     Capital:"Delhi",
     Flag:"india.jpg"
 };
    $scope.country=country;  //registering module with the controller
});   
