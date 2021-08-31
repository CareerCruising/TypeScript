/// <reference path="typings/tsd.d.ts" />
class CusomDirectiveCtrl {
  static $inject = ['$scope'];
  constructor($scope: ng.IScope) {

  }
}

class CustomDirective implements ng.IDirective {

  static instance(): ng.IDirective {
    return new CustomDirective;
  }
  
  restrict =  'A';  
  controller = CusomDirectiveCtrl;
  
  link(scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes): void {
    element.on('click', (): void => { //unexpected "this" value
      console.log(this);
    })

    element.on('click', function(): void { //correct "this" value
      console.log(this);
    })

  }
}
  
angular.module('ccmvcApp')
  .directive('CusomDirective', CustomDirective.instance);