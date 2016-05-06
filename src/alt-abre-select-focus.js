;(function(ng) {
  "use strict";

  ng.module('alt.abre-select-focus', [])
    .directive('altAbreSelectOnFocus', [function GreetingService() {
      return {
        restrict: 'A',
        link: function(scope, element, attrs) {
          $(element)
            .next('.select2')
            .find('.select2-selection')
            .on('focus', function() {
              $(element).select2('open');
            });
        }
      }
    }]);
}(window.angular));
