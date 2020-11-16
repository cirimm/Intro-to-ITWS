


$(document).ready(function() {
    $.ajax({
        type: "GET",
   	 	url: "projectsList.json",
   	 	dataType: "json",
   	 	success: function(responseData, status){
            var output;  
            var number = 1; 
    	 	$.each(responseData.items, function(i, item) {
                if(number == 1){
                    output += '<div id="projectfirst">'
                } else {
                    output += '<div id="project">'
                }
                output += '<ul class="projectlist">'
                output += '<li><a href="' + item.projectLink + '" class="boldtext">' + item.projectName + '</a></li>';
                output += '<li>' + item.projectDesc + '</li>';
                output += '<li><span class="italictext">Skills</span></li>'
                output += '<li>' + item.projectSkills + '</li>';
                output += '</ul></div>';
                number++;
      	});
      	$('#maincontent').html(output);
    	}, error: function(msg) {
      				// there was a problem
      	alert("There was a problem: " + msg.status + " " + msg.statusText);
    	}
  	});
});
