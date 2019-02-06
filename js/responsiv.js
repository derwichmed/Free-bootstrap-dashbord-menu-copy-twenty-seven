$(function (){
    isSubMenuHidden = true;
    $('body > header .nav_item > div > .click').click(function (){
        $('.sub_menu:visible').hide();
        $('.mega_menu:visible').hide();
        if(isSubMenuHidden){
            $(this).find('+ .sub_menu').show();
            isSubMenuHidden = false;
        }
        else{
            $(this).find('+ .sub_menu').hide();
            isSubMenuHidden = true;
        }
    });
    
    isSubMenu2Hidden = true;
    $('body > header .nav_item .sub_menu .sub_menu_item > div > .click').click(function (){
        $('body > header .nav_item .sub_menu .sub_menu_item > div > .click + .sub_menu:visible').hide();
        if(isSubMenu2Hidden){
            $(this).find('+ .sub_menu').show();
            isSubMenu2Hidden = false;
        }
        else{
            $(this).find('+ .sub_menu').hide();
            isSubMenu2Hidden = true;
        }
    });
    
    isMegaMenuHidden = true;
    $('body > header .nav_item > div > .click_mega_menu').click(function (){
        $('.sub_menu:visible').hide();
        $('.mega_menu:visible').hide();
        if(isMegaMenuHidden){
            $(this).find('+ .mega_menu').show();
            isMegaMenuHidden = false;
        }
        else{
            $(this).find('+ .mega_menu').hide();
            isMegaMenuHidden = true;
        }
    });
    
    $('body > header > nav:last-child .nav_bar_menu').click(function (){
       $('#mobile_effect_div').show();
       $('body > header > nav:first-child').css('right','100%');
       $('body > header > nav:first-child').show();
       $('body > header > nav:first-child').animate({
           right: '0'
       },200);
    });
    $('#mobile_effect_div').click(function (){
        $('body > header > nav:first-child').animate({
           right: '100%'
       },100,function () {
          $('body > header > nav:first-child').hide();
          $('#mobile_effect_div').hide();
       });
    });
    
    $('.side_bar_dashbord > section .item').click(function (){
       $('.side_bar_dashbord > section .item .sub_item:visible').hide();
       $(this).find('.sub_item').show();
    });
    
    isSideBarVisible = true;
    $('.side_bar_menu_icon').click(function (){
       if($(window).width() <= 970){ 
       $('#mobile_effect_02_div').show();
       $('.side_bar_dashbord').css('left','100%');
       $('.side_bar_dashbord').show();
       $('.side_bar_dashbord').animate({
           left: '0'
       },200);
       }
        else{
            if(isSideBarVisible){
                $('.side_bar_dashbord').fadeOut("slow");
                isSideBarVisible = false;
            }
            else{
                $('.side_bar_dashbord').fadeIn("slow");
                isSideBarVisible = true;
            }
            
        }
    });
    $('#mobile_effect_02_div').click(function (){
        if($(window).width() <= 970 )
        $('.side_bar_dashbord').animate({
            left : '100%'
       },100,function () {
          $('.side_bar_dashbord').hide();
          $('#mobile_effect_02_div').hide();
       });
        
    });
});