/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
var MyApp;
(function (MyApp) {
    var MyDirective = (function () {
        function MyDirective(myService) {
            this.message = 'This is MyDirective';
            this._myService = myService;
            this.message = this._myService.GetMessage();
        }
        // This is the initializer that we will pass to AngularJS.
        MyDirective.initializer = function (myService) {
            return {
                controller: function () { return new MyDirective(myService); },
                controllerAs: 'ctrl',
                scope: {
                    colors: '=',
                    heading: '@'
                },
                replace: true,
                template: '<div><h2>{{heading}}</h2><div ng-repeat="color in colors">{{color}}</div></div>'
            };
        };
        // Keep our Angular dependencies as a static variable
        MyDirective.AngularDependencies = [
            'MyService',
            MyDirective.initializer];
        return MyDirective;
    }());
    MyApp.MyDirective = MyDirective;
})(MyApp || (MyApp = {}));
