//도넛그래프
$(document).ready(function(){
  $('rate90').eq(0).addClass('rate90');
  $('rate80').eq(1).addClass('rate80');
  $('rate60').eq(2).addClass('rate60');
 });


/*
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.m_btn')) {
    var dropdowns = document.getElementsByClassName("nav_m_listc");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}*/

$(document).ready(function(){
	$(".nav_m_listc").hide();
	$(".m_btn").click(function(){
		$(".nav_m_listc").slideToggle(500);
	});
});

//레이어 팝업
function wrapWindowByMask(){
 
       
        var maskHeight = $(document).height();  
        var maskWidth = $(window).width();  

        $("#mask").css({"width":maskWidth,"height":maskHeight});  
	
       
        $("#mask").fadeIn(0);      
        $("#mask").fadeTo("slow",0.6);    
        
        $(".window").show();
 
    }
 
    $(document).ready(function(){
   
        $(".openMask").click(function(e){
            e.preventDefault();
            wrapWindowByMask();
	   
        });
 
   
        $(".window .close").click(function (e) {  
            e.preventDefault();  
            $("#mask, .window").hide();  
        });       
 
      
        $("#mask").click(function () {  
            $(this).hide();  
            $(".window").hide();  
           
        });      
 
    });



	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
