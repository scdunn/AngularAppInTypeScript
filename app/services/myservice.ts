/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />

namespace MyApp {
    export class MyService {
        private _names: string[] = ["John", "Dave", "Sam"];
        private _colors: string[] = ["red", "blue", "orange"];

        public GetMessage(): string { return "Our message is thank you."; }
        public GetNames(): string[] {
            return this._names;
        }
        public GetColors(): string[] { return this._colors; }
    }

}
