(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.styleguide = {
    attach: function (context, settings) {
      $('.sg-menu').each(function (index) {
        $('body').addClass('jsa-styleguide-menu');

        $('.js-sg-menu-toggle').click(function () {
          $('body').toggleClass('jsa-styleguide-menu--open');
        });
      });
    }
  };
})(jQuery, Drupal);
