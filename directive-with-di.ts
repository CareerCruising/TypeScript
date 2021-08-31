/// <reference path="typings/tsd.d.ts" />

class CusomDirectiveCtrl2 {
  static $inject = ['$scope'];
  constructor($scope: ng.IScope) {

  }
}

class CustomDirective2 implements ng.IDirective {

/*if we need to inject dependencies into the directive class we do it the following way*/
  static instance(): ng.IDirectiveFactory {
    var directive = (myService) => new CustomDirective2(myService);
    directive.$inject = ['myService'];
    return directive;
  }
  
  constructor(private myService) {
  }
  
  restrict = 'A';
  controller = CusomDirectiveCtrl2;

 /*we need the link fn as a property rather than method so we can capture the class value of "this" and get the myService dependency off it */
  link = (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes): void => {
    var _that = this;
    
    console.log(_that.myService);    
    
    element.on('click', (): void => { //unexpected "this" value
      console.log(this);
    })

    element.on('click', function(): void { //correct "this" value
      console.log(this);
    })

  }
}

angular.module('ccmvcApp')
  .directive('CusomDirective2', CustomDirective2.instance());
