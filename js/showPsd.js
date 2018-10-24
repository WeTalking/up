
$(function(){
   var $i = $('#passwordeye i');
   var showPwd = $("#psd");
   $i.off('click').on('click',function(){
       if($i.hasClass('icon-yincang')){
           $i.removeClass('icon-yincang').addClass('icon-chakan');//密码可见
           showPwd.prop('type','text');
       }else{
           $i.removeClass('icon-chakan').addClass('icon-yincang');//密码不可见
           showPwd.prop('type','password');
       };
   });     
});