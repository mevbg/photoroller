;(function($) {

  'use strict';

// Defining PhotoRoller
  $.photoroller = function(options) {
    // Preparing options
    options = $.extend({
      startpoint: 1,
      jump_back: false,
      jumppoint_click: true
    }, options);

    var defineTarget = function() {
        var main = $('#photoroller');

        return target = options.target ? options.target :
          main.length > 0 ? main : null;
      },
      defineNodes = function () {
        return options.nodes ? target.find(options.nodes) :
          target.children().length > 0 ? target.children() : null;
      },
      defineStartPoint = function() {
        return options.startpoint ? options.startpoint - 1 : 0;
      },
      defineFixedImage = function() {
        return typeof(options.jump_back) === 'undefined'? false : options.jump_back;
      },
      defineFixedImageClick = function() {
        return typeof(options.jumppoint_click) === 'undefined'? true : options.jumppoint_click;
      },
      getWidth = function() {
        return target.width();
      },
      setActive = function(obj) {
        nodes.removeClass('pr-active');
        $(obj).addClass('pr-active');

        return $(obj);
      };

    var target = defineTarget(); if (!target) { return false; }
    var nodes  = defineNodes();  if (!nodes)  { return false; }

    // Setting classes
    target.addClass('photoroller');
    nodes.addClass('pr-img');

    var width = getWidth(),
      startpoint = defineStartPoint(),
      activeNumber = startpoint,
      jump_back = defineFixedImage(),
      jumppoint_click = defineFixedImageClick();

    // Showing the startpoint
    setActive(nodes[activeNumber]);

    // Binding mousemove event
    target.mousemove(function(e) {
      var columnNumber = parseInt(e.offsetX / (width / nodes.length));
      if (columnNumber !== activeNumber) {
        if (e.offsetX >= width) {columnNumber--;}
        activeNumber = columnNumber;
        setActive(nodes[columnNumber]);
      }
    }).mouseleave(function(){
      if (jump_back){
        activeNumber = startpoint;
        setActive(nodes[activeNumber]);
      }
    }).click(function(){
      if (jump_back && jumppoint_click){
        startpoint = activeNumber;
      }
    });

    // Binding resize event
    $(window).resize(function() {
      width = getWidth();
    });

    return target;
  };

// Defining PhotoRoller method
  $.fn.photoroller = function(options) {
    return this.each(function() {
      this.opt = {
        nodes: options && options.nodes ? $(this).find(options.nodes) :
          $(this).children().length > 0 ? $(this).children() : null,
        startpoint: options && options.startpoint ? options.startpoint : 1,
        jump_back: (function() {
          return options && typeof(options.jump_back) !== 'undefined' ?
            options.jump_back : false;
        }()),
        jumppoint_click: (function() {
          return options && typeof(options.jumppoint_click) !== 'undefined' ?
            options.jumppoint_click : true;
        }())
      };

      $.photoroller($.extend(this.opt, {target: $(this)}));
    });
  };

}(jQuery));