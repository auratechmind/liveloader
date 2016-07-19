(function($) {
        $.fn.liveloader = function(options) {
            // Establish our default settings
            var settings = $.extend({
                bgcolor: '#FFFFFF',
                bordercolor: '#000000',
                color: '#000000',
                fafont: 'spinner',
                fasize: 'fa-3x',
                faspeed:'fast',
                faeffect:'pulse',
                imgurl:''
            }, options);
            
                var bordercolor = '3px solid '+settings.bordercolor;
                var fafont="fa-"+settings.fafont;
                var faeffect="faa-"+settings.faeffect;
                var faspeed="faa-"+settings.faspeed;                
                
            if(settings.imgurl !== ''){
                 $(this).css('border-top', bordercolor);
                 var imgpath='url('+settings.imgurl+')';             
                 $(this).css('background-color', settings.bgcolor);
                 $(this).find("#loadercontent").css('background-image',imgpath);
                 $(this).find("#loadercontent").css('background-size','cover');
                 $(this).find("#loadercontent").css('background-position','center');                
            }
            else{
                return this.each(function() {
                    $(this).css('border-top', bordercolor);
                    $(this).css('background-color', settings.bgcolor);
                    $(this).find("#loadercontent").prepend("<i class='fa fa-fw'></i>")
                    $(this).find("i").addClass(fafont).addClass(faeffect).addClass('animated').addClass(faspeed).addClass(settings.fasize);
                    $(this).find("i").css('color', settings.color);                   
                });
            }

        }    
}(jQuery));

$(window).load(function() { // makes sure the whole site is loaded
    $('#loadercontent').fadeOut(); // will first fade out the loading animation
    $('#pageloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({
        'overflow': 'visible'
    });    
});