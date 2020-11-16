$(document).ready(function() {

    $.ajax({
        type: "GET",
   	 	url: "preferences.json",
   	 	dataType: "json",
   	 	success: function(responseData, status){
            var output = "";  
            output+="<ul>"
            output+="<li> README </li>"
            output+="<ul>"
    	 	$.each(responseData.readme, function(i, item) {
                output+='<li> <a href="' + this.link + '">Link</a> </li>'
             
        });
            output+="</ul>"
            output+="<li> Fonts </li>"
            output+="<ul>"
            $.each(responseData.fonts, function(i, item) {
               output+="<li>" + this.name + ", " + this.src + "</li>"
         
        });
            output+="</ul>"
            output+="<li> Images </li>"
            output+="<ul>"
            $.each(responseData.images, function(i, item) {
                output+="<li>" + this.name + "</li>"
     
        });
        output+="</ul>"
        output+="</ul>"
      	$('#maincontent').html(output);
    	}, error: function(msg) {
      				// there was a problem
      	alert("There was a problem: " + msg.status + " " + msg.statusText);
    	}
  	});

});