/// <reference path="typings/tsd.d.ts" />
'use strict';

interface IMbgDefaultsInterface {

}

class MyBgService implements IMbgDefaultsInterface {
	constructor(private $http: ng.IHttpService) {

	}
}

factory.$inject = ['$http'];

function factory($http: ng.IHttpService): IMbgDefaultsInterface {
	return new MyBgService($http);
}

angular
	.module('ccmvcApp')
	.factory('MyBgService')