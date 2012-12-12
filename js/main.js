/*jslint debug: true, es5: true, unparam: false, sloppy: true, browser: true, windows: true, indent: 4, plusplus: true, nomen: true, newcap: true */
/*global jQuery */


(function ($) {
    "use strict";
    
    

    function _onReady() {
        
        //Bookmarks scrolling
        $(".nav a").click(function (e) {
            var $this = $(this),
                href = $this.attr("href");
            
            if (href.length > 1) {
                
                e.preventDefault();
                
                $("html,body").animate({
                    "scrollTop" : $(href).offset().top - 60
                }, "fast");
            }
            
        });
        
        
        //Collapsing
        $(".row h2").bind("click", function (e) {
            var $this = $(this);
            
            $this.find("i").toggleClass("icon-chevron-down icon-chevron-right");
            
            $this.next(".block").toggleClass("closed").collapse("toggle");
        });
        
    }
    
    $(document).ready(_onReady);
}(jQuery));
