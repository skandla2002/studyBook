'use strict';
describe('RecipientControllerSpec', function(){
	var scope;
	var RecipientController;
	beforeEach(angular.mock.module('Todo'));
	beforeEach(angular.mock.inject(function($rootScope, $controller){
		scope = $rootScope.$new();
		RecipientController = $controller('RecipientController', {$scope: scope});
	}));
	it('RecipientController가 정의되어 있어야 한다.', function(){
		expect(RecipientController).toBeDefined();
	});
	it('RecipientController가 정상적으로 추가된다.', function(){
		var recipientInfo = {
			name:'jongmeong',
			age:'32',
			sex:'man',
			company: 'SSD'
		};
		var recipientCount = scope.recipients.length;
		scope.putRecipient(recipientInfo);
		console.log(recipientCount);

		expect(scope.recipients.length).toEqual(recipientCount + 1);
	});

	
});