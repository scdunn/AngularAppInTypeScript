/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
namespace MyApp {
    export class MyDirective {
        // This is the initializer that we will pass to AngularJS.
        public static initializer: ng.IDirectiveFactory = (myService: MyApp.MyService) => {

            return {
                controller: () => new MyDirective(myService),
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
        public static AngularDependencies: any[] = [
            'MyService',
            MyDirective.initializer];

        private _myService: MyApp.MyService;

        public constructor(myService: MyApp.MyService) {
            this._myService = myService;
            this.message = this._myService.GetMessage();
        }

        public message: string = 'This is MyDirective';

    }
}

