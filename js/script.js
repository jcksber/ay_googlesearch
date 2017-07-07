/*
 * script.js 
 * 
 * Made: July 20, 2015 by Jack Kasbeer
 * Version: 1.0
 * Known Bugs: ###
 *
 * Contains a combination of javascript and jQuery functions
 * for AY Google Search.
 */

/* Functions useful for debugging */
function _l(e) { console.log(":: " + e + " ::"); };
function err(msg) { console.log("Error: " + msg); };

/* Global variables */
var ow = $(window).width();  // Keep track of initial dimensions
		oh = $(window).height();
		 w = $(window).width();  // Update dimensions 
		 h = $(window).height();

/* Functions needed for site functionality & style */
/*
 * update_bar - Change search bar placeholder with file name
 */
function update_bar() 
{
	var cfile = $("#file").val();
  /* Only change content of search bar if searching for file */
  if ($("#search-switch").hasClass('file'))
    $("#search-bar").attr("value", cfile); 
}

/*
 * flip_switch - visually adjust search bar depending on search type
 */
function flip_switch() 
{ 
	var flip = $("#search-switch");
	var sb   = $("#search-bar");
	
	if (flip.hasClass('file')) {
		/* Change onoffswitch class to .text */
		flip.addClass('text');
		flip.removeClass('file');
		/* Adjust search bar placeholder for normal Google Search */
		sb.attr("value", "");
		sb.attr("placeholder", "Google Search...");
	}
	else if (flip.hasClass('text')) {
		/* Change onoffswitch class to .file */
		flip.addClass('file');
		flip.removeClass('text');
		/* Adjust search bar placeholder for custom file search */
		var cfile = $("#file").val();
		if (cfile = "No file chosen") {
			cfile = "No file chosen...";
			sb.attr("placeholder", cfile); 
		}
		else update_bar();
	}
	else err("flip switch");
}

/*
 * toggle_help - manages the help window
 */
function toggle_help()
{
	var h = $("#help-window");
	/* HELP WINDOW IS CURRENTLY OPEN (VISIBLE) */
	if (h.hasClass('open')) {
		/* Close the help window */
		h.removeClass('open');
		h.addClass('closed');
	}
	/* HELP WINDOW IS CURRENTLY CLOSED (HIDDEN) */
	else {
		/* Open the help window */
		h.removeClass('closed');
		h.addClass('open');
	}
}

/*
 * resize_window - adjust window width & height global var's
 */
function resize_window() 
{
	w = $(window).width();
	h = $(window).height();
}

/*
 * set_dimensions - set the dimensions of elements that need
 *                  to depend on script for size
 */
function set_dimensions() 
{
	// Control section height
	$("#control-area.initial-contain").css("height", (h*0.6)-50); 
	// Footer height (no search yet)
	$("#main-content > section:first-child").css("height", (h*0.4));
	// Content (for search results) needs to be spaced from the top of the screen
	$("#content-area").css("marginTop", (h*0.6)-50);
}

/* DOCUMENT READY */
$(document).ready(function(){
	/* Set the initial dimensions of landing page */
	set_dimensions();

});













