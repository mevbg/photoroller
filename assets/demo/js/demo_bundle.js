// =========================| Demo scripts |========================= //



//--------------------------| DOM Ready

jQuery(document).ready(function($) {

  'use strict';

  $.ajax({
    url: 'assets/demo/demo.html',
    dataType: 'html'
  }).done(function(response) {
    $('.demo-holder .content').html(response).promise().done(function(){
      $('#photoroller').photoroller({
        startpoint: 6 // optional (default: 1)
      });

      $.photoroller({
        target: $('#photoroller2'), // optional (default: $('#photoroller'))
        startpoint: 5 // optional (default: 1)
      });
    });
  });

});