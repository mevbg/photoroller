// =========================| Demo scripts |========================= //



//--------------------------| DOM Ready

jQuery(document).ready(function($) {

  $('#photoroller').photoroller({
    startpoint: 6 // optional (default: 1)
  });

  $.photoroller({
    target: $('#photoroller2'), // optional (default: $('#photoroller'))
    startpoint: 5 // optional (default: 1)
  });

});