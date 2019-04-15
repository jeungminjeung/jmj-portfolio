//도넛그래프
$(document).ready(function(){
  $('rate90').eq(0).addClass('rate90');
  $('rate80').eq(1).addClass('rate80');
  $('rate60').eq(2).addClass('rate60');
 });

//상단버튼
$(document).ready(function(){
	$(".nav_m_listc").hide();
	$(".m_btn").click(function(){
		$(".nav_m_listc").slideToggle(800);
	});
});



//
 $(document).ready(function(){
      
        $(".openMask").click(function(e){
	           $('body').css({'overflow-y': 'hidden'});
		   $(".close_btn").click(function(){
			 $('body').css({'overflow-y': 'scroll'});
		   });
        });
});

	
	
	
	
	
	
	
	
	
