$(document).ready(() => {

     $("#modSection").hide();

    
    $("#btn").click(() => {

    	$("#modSection").slideToggle();

      $("#btn").css("opacity","0.5");

       $("body").addClass('back');
   

    }) 


$(".closeBtn").click(() =>{

	 $("#modSection").slideUp();
	  $("body").removeClass('back');
})






    })