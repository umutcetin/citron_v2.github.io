$(function () {  'use strict';  $(document).scroll(function () {	  var $nav = $(".navbar-fixed-top");        var height_to_change = $(window).height()* 0.9;    if ($(window).width()<=375){      height_to_change = height_to_change * 0.8; //height for small screens / normal    }    	  $nav.toggleClass('scrolled', $(this).scrollTop() > height_to_change);        var $hdr = $(".header a");    $hdr.toggleClass('scrolled', $(this).scrollTop() > height_to_change);        var $toggleBtn = $(".custom-toggler .navbar-toggler-icon");    $toggleBtn.toggleClass('scrolled', $(this).scrollTop() > height_to_change);        var $navbarToggler = $(".custom-toggler.navbar-toggler");    $navbarToggler.toggleClass('scrolled', $(this).scrollTop() > height_to_change);    	});});