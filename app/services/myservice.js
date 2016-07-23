/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
var MyApp;
(function (MyApp) {
    var MyService = (function () {
        function MyService() {
            this._names = ["John", "Dave", "Sam"];
            this._colors = ["red", "blue", "orange"];
        }
        MyService.prototype.GetMessage = function () { return "Our message is thank you."; };
        MyService.prototype.GetNames = function () {
            return this._names;
        };
        MyService.prototype.GetColors = function () { return this._colors; };
        return MyService;
    }());
    MyApp.MyService = MyService;
})(MyApp || (MyApp = {}));
