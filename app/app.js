/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
var MyApp;
(function (MyApp) {
    'use strict';
    var app = angular.module('myApp', [])
        .service('MyService', [function () { return new MyApp.MyService(); }])
        .directive('myDirective', MyApp.MyDirective.AngularDependencies)
        .controller('MyController', MyApp.MyController.AngularDependencies);
})(MyApp || (MyApp = {}));
