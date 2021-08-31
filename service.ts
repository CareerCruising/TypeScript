/// <reference path="typings/tsd.d.ts" />
'use strict';

export interface IMbgDefaultsInterface {

}

class MyBgService implements IMbgDefaultsInterface {
	static $inject = ['$http'];
	constructor(private $http: ng.IHttpService) {

	}
}

angular
	.module('ccmvcApp')
	.service('MyBgService')