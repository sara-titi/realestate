$(document).ready(function(){
    
    
        $(".linkColor , .nav-link").hover(
           function(){
            
          
            $(this).css("color" , "red");
               
           
           } ,
              function(){
            
          
            $(this).css("color" , "black");
               
           
           } );
         $('.nav-link').css("color" , "black");
        $(".clickEvent").on("click",function(event){
		
		event.preventDefault();
	});
		
	
	
      
       
         
        $('.clickEvent').click(function(){
        var dsply= $('.hiddenDiv').css("display");
        if (dsply === "none") {
             $('.hiddenDiv').css("display" , "block");
        }
        else
          $('.hiddenDiv').css("display" , "none");
            
          
            });
		
		 $('#clickEvent2').click(function(){
        var dsply= $('#hiddenDiv2').css("display");
        if (dsply === "none") {
             $('#hiddenDiv2').css("display" , "block");
        }
        else
          $('#hiddenDiv2').css("display" , "none");
            
          
            });
		 
          $("#Features").on("click",function(event){
		
		event.preventDefault();
	});
             $('#Features').click(function(){
        var dsply= $('#hideTable').css("display");
        if (dsply === "none") {
             $('#hideTable').css("display" , "block");
        }
        else
          $('#hideTable').css("display" , "none");
            
          
            });
        
		
		$(".newsLink").on("click",function(event){
		
		event.preventDefault();
	});
	
	
    
         $(".badge-dark").hover(
           function(){
            
          
            $(this).css({"background-color" : "#C0392B",
						"opacity":"1"});
               
           
           } ,
              function(){
            
          
            $(this).css({"background-color" : "black",
						"opacity":".5"
			  });
               
           
           } );
		 
		 
		  $(".btn-danger").hover(
           function(){
            
          
            $(this).css("opacity" , ".6");
               
           
           } ,
              function(){
            
          
            $(this).css("opacity" , "1");
               
           
           } );
		 
	/**********************************/
	  $(".card-img-top ").hover(
           function(){
            
           $(this).css("opacity" , ".7");
            
           
           
           } ,
              function(){
            
          
             $(this).css("opacity" , "1");
               
           
           } );
	  
	  
	   $(".cardOpacity ").hover(
           function(){
            
           $(this).css("opacity" , ".7");
            
           
           
           } ,
              function(){
            
          
             $(this).css("opacity" , "1");
               
           
           } );
		    $(".downloadMore2").hover(
           function(){
            
           $(this).css("background-color" , "#C0392B");
             $(".downloadMore").css("color" , "white");
           
           
           } ,
              function(){
            
          $(this).css("background-color" , "#F8F9F9");
              $(".downloadMore").css("color" , "#C0392B");
               
           
           } );
		 
		 
		 
		   $(".HorizontaldownloadMore").hover(
           function(){
            
           $(this).css("background-color" , "#C0392B");
             $(".downloadMore").css("color" , "white");
           
           
           } ,
              function(){
            
          $(this).css("background-color" , "#F8F9F9");
              $(".downloadMore").css("color" , "#C0392B");
               
           
           } );
		   
		   
		   $(".btnTop").on("click",function(){
					$(window).scrollTop(2);
					});
		   
		   
		   	$(window).scroll(
			function(){
				 if ($(this).scrollTop() > 100) {
							$('.btnTop').fadeIn();
					}
					else {
						$('.btnTop').fadeOut();
					}
								
			
				
			});
			
  $(".backgroundIstanbul").hover(
           function(){
           
           $(this).css("background-color" , "transparent");
            
           
           } ,
              function(){
            
          $(this).css("background-color" , "rgba(0, 0, 0, .2)");
              
           
           } );
		
	
		/***********************************
		 $('.downloadMore2').click(function(){
           var dsply= $('.projectsUnderHide').css("display");
        
             $('.projectsUnderHide').css("display" , "block");
      
            
          
            });
		 $('.downloadMore2').click(function(){
           var dsply= $('.projectsUnderHide2').css("display");
        
             $('.projectsUnderHide2').css("display" , "block");
      
            
          
            });*/
		 
		 
});
	

         /*$('.turkeyEstate').hover(
          	$(":root").css("background-color","#F8F9F9");
         function(){
         $(this).fadeIn();
          
                   
        },
         function(){
         $(this).fadeOut();
                   
        }
        
        
        );
    $('.mediaList').hover(
           function(){
            
           $('.mediaDiv').fadeIn();
           
             $('.turkeyEstate').css("display" , "none");
                $('.whoAreWeDiv').css("display" , "none");
           
           } 
        
             
        );
         $('.mediaDiv').hover(
          
         function(){
         $(this).fadeIn();
                   
        },
         function(){
         $(this).fadeOut();
                   
        }
        
        
        );
    
    
       $('.whoList').hover(
           function(){
            
           $('.whoAreWeDiv').fadeIn();
            $('.mediaDiv').css("display" , "none");
               $('.turkeyEstate').css("display" , "none");
           
           } 
        
             
        );
        
       
         $('.whoAreWeDiv').hover(
          
         function(){
         $(this).fadeIn();
          
                   
        },
         function(){
         $(this).fadeOut();
                   
        }
        
        
        );
     $('.hide').mouseenter(
          
         function(){
         $('.turkeyEstate').css("display" , "none");
          $('.mediaDiv').css("display" , "none");
         $('.whoAreWeDiv').css("display" , "none");
           
                   
       
        
         });
   
    
    
});*/