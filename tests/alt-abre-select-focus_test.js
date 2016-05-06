"use strict";

describe('alt.abre-select-focus', function() {
  var _rootScope, _scope, _element, _compile;

  beforeEach(module('alt.abre-select-focus'));

  beforeEach(inject(function($injector) {
    _rootScope = $injector.get('$rootScope');
    _compile = $injector.get('$compile');
    _scope = _rootScope.$new();

    var _html = '<div>\
                  <select alt-abre-select-on-focus></select>\
                  <span class="select2">\
                    <span class="select2-selection"></span>\
                  </span>\
                </div>';

    _element = angular.element(_html);
    _compile(_element)(_scope);

    _scope.$digest();
  }));

  describe('criação', function() {
    it('deve criar o elemento corretamente', function() {
      expect(_element).toBeDefined();
    });
  });

  describe('focus', function() {
    it('não deve chamar o select2, evento não é de open', function() {
      spyOn($.fn, 'select2').and.callFake(angular.noop);

      expect($.fn.select2).not.toHaveBeenCalled();

      _element.find('.select2-selection').eq(0).click();

      _rootScope.$digest();

      expect($.fn.select2).not.toHaveBeenCalled();
    });

    it('deve chamar o select2 com o open', function() {
      spyOn($.fn, 'select2').and.callFake(angular.noop);

      expect($.fn.select2).not.toHaveBeenCalled();

      _element.find('.select2-selection').eq(0).triggerHandler('focus');

      _rootScope.$digest();

      expect($.fn.select2).toHaveBeenCalledWith('open');
    });
  })
});
