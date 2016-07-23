/// <reference path="../scripts/typings/angularjs/angular.d.ts" />


namespace MyApp {
    'use strict';
    
    var app = angular.module('myApp', [])
    .service('MyService', [() => new MyApp.MyService()])
    .directive('myDirective', MyApp.MyDirective.AngularDependencies)
    .controller('MyController', MyApp.MyController.AngularDependencies);
}