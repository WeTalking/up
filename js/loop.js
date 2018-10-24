//顶部轮播图实现代码
window.onload = function() {
   var oIco = document.getElementById("ico");
   var aBtn = oIco.getElementsByTagName("a");
   var oSlide = document.getElementById("slide");
   var oUl = oSlide.getElementsByTagName("ul");
   var aLi = oUl[0].getElementsByTagName("li");
   var oBtnLeft = document.getElementById("btnLeft");
   var oBtnRight = document.getElementById("btnRight");
   var baseWidth = aLi[0].offsetWidth;
   oUl[0].style.width = baseWidth * aLi.length + "px";
   var iNow = 0;
   for(var i=0;i<aBtn.length;i++) { 
      aBtn[i].index = i;
      aBtn[i].onclick = function() {
        move(this.index);
     //aIco[this.index].className = "active";
      }
   }
   oBtnLeft.onclick = function() {
      iNow ++;
      //document.title = iNow;
      move(iNow);
   }
   oBtnRight.onclick = function() {
      iNow --;
      document.title = iNow;
      move(iNow);
   }
   var curIndex = 0;
   var timeInterval = 1500;
   setInterval(change,timeInterval);
   function change() {
      if(curIndex == aBtn.length) {
        curIndex =0;   
      }else{
        move(curIndex);
        curIndex += 1;
      }
   }
  function move(index) {
    //document.title = index;
    if(index>aLi.length-1){
      index = 0;
      iNow = index;
    }
    if(index<0) {
     index = aLi.length - 1;
     iNow = index;
    }
    for(var n=0;n<aBtn.length;n++) {
     aBtn[n].className = ""; 
    }
    aBtn[index].className = "active";
    oUl[0].style.left = -index * baseWidth + "px";
   }
}