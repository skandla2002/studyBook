'use strict';

describe('Controller: RecipientCtrl', function () {

  // load the controller's module
  beforeEach(module('angularTestKarmaApp'));
  console.log("11111");
  var AboutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RecipientCtrl = $controller('RecipientCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RecipientCtrl.awesomeThings.length).toBe(3);
  });
});