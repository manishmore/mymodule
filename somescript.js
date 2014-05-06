(function($){

     $(document).ready(function() {
      function toggle_visibility(id) {
        var e = document.getElementById(id);
        if(e.style.display == 'block') {
           e.style.display = 'none';
           $.cookie('leftCol', 'expanded');
            } else {
          e.style.display = 'block';
          $.cookie('leftCol', 'collapsed');
          $("#foo").css("height","20px");
         }
     }
     
    function toggle_visibility_div2(id) {
		alert('sdsd');
       var r = document.getElementById(id);
       if(r.style.display == 'block') {
          r.style.display = 'none';
          $.cookie('rightCol', 'expanded');
        }else {
          r.style.display = 'block';
          $.cookie('rightCol', 'collapsed');
          $("#foo1").css("height","20px");
        }
     }
     
     function toggle_visibility_div3(id) {
       var e2 = document.getElementById(id);
       if(e2.style.display == 'block') {
          e2.style.display = 'none';
        $.cookie('colast', 'expanded');
        } else {
          e2.style.display = 'block';
          $.cookie('colast', 'collapsed');
          $("#foo2").css("height","20px");
         }
      } 



      //SET COOKIES



	// Left column state
	var leftCol = $.cookie('leftCol');
	// Right column state
	var rightCol = $.cookie('rightCol');
	//Colast column state
	var colast = $.cookie('colast');
	// alert(Colast);
	// Set the user's selection for the left column
    //display: block;
    
	if (leftCol == 'collapsed') {
		$('#foo').css("display","block");
		$("#leftCol").css("height","20px");
	 } else if(leftCol == 'expanded') {
		$('#foo').css("display","none");
		$("#leftCol").css("height","20px");
	};
	
	// Set the user's selection for the right column
	if(rightCol == 'collapsed') {
		$("#foo1").css("display","block");
		$("#rightCol").css("height","20px");
	  }else if(rightCol == 'expanded') {
		$('#foo1').css("display","none");
		$("#rightCol").css("height","20px");
	 };
      //middle colume here
  	if( colast == 'collapsed') {
		$("#foo2").css("display","block");
		$("#colast").css("height","20px");
	  }else if(colast == 'expanded') {
		$('#foo2').css("display","none");
		$("#colast").css("height","20px");
	  };
	 });

})(jQuery);
