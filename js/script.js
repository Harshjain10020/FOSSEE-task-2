(function ($, Drupal) {
    Drupal.behaviors.myCustomScript = {
      attach: function (context, settings) {
        console.log("My custom JS is working!");
      }
    };
  })(jQuery, Drupal);
  