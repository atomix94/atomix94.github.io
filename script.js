var topElement = $('.header');

var topElementHeight = topElement.outerHeight();


$(document).scroll(function(e){
                   
    var opacityValue = (topElementHeight - window.scrollY) / topElementHeight;               
         
    if (opacityValue >=0)
        {
            topElement.css('opacity',opacityValue);
        }
    
    
                   
});