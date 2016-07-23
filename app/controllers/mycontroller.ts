/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />

namespace MyApp {

    export class MyController {
        static AngularDependencies = ['$scope', 'MyService', MyController];

        private _myService: MyApp.MyService;
        public heading: string = 'My TypeScript Angular App';
        public text: string = 'This small app is meant to demonstrate a simple angular app using TypeScript.';

        // Dependency injection via contrustor
        constructor($scope: ng.IScope, myService: MyApp.MyService) {
            this._myService = myService;
        }

        public NamesFromService(): string[] {
            return this._myService.GetNames();
        };

        public GetColors(): string[] {
            return this._myService.GetColors();
        };

    }
}
