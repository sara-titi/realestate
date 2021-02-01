
 var projectsUnderHide = document.querySelectorAll('div.projectsUnderHide');
 var downloadMore2=document.querySelector("button.downloadMore2");

    var i;
downloadMore2.onclick=function(){
		'use strict';
        i = 0 ;
        projectsUnderHide[i].style.display = 'block';
     i+=1;
         
       downloadMore2.addEventListener('click', function(){
        projectsUnderHide[i].style.display = 'block';
         i+=1;
        });
       
       
};
/***************************************************/

 var HorizontalCardHide = document.querySelectorAll('div.HorizontalCardHide');
 var HorizontaldownloadMore=document.querySelector("button.HorizontaldownloadMore");

    var i;
HorizontaldownloadMore.onclick=function(){
		'use strict';
        i = 0 ;
        HorizontalCardHide[i].style.display = 'block';
     i+=1;
         
       HorizontaldownloadMore.addEventListener('click', function(){
        HorizontalCardHide[i].style.display = 'block';
         i+=1;
        });
       
       
};