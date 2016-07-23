/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
var MyApp;
(function (MyApp) {
    var MyController = (function () {
        // Dependency injection via contrustor
        function MyController($scope, myService) {
            this.heading = 'My TypeScript Angular App';
            this.text = 'This small app is meant to demonstrate a simple angular app using TypeScript.';
            this._myService = myService;
        }
        MyController.prototype.NamesFromService = function () {
            return this._myService.GetNames();
        };
        ;
        MyController.prototype.GetColors = function () {
            return this._myService.GetColors();
        };
        ;
        MyController.AngularDependencies = ['$scope', 'MyService', MyController];
        return MyController;
    }());
    MyApp.MyController = MyController;
})(MyApp || (MyApp = {}));
