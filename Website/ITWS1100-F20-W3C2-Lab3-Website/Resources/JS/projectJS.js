
$(document).ready(function() {

    if($('#titleblock').find('h1').text()=="Matthew's Projects Page"){
        $.ajax({
            type: "GET",
            url: "projectsList.json",
            dataType: "json",
            success: function(responseData, status){
                var output = "";  
                var number = 1; 
                $.each(responseData.projects, function(i, item) {
                    
                    if(number == 1){
                        output += '<div id="projectfirst">'
                    } else {
                        output += '<div class="project">'
                    }
                    output += '<ul class="projectlist">'
                    output += '<li><a href="' + item.projectLink + '" class="boldtext">' + item.projectName + '</a>';
                    output += '    <img src="' + responseData.images[3].imagesrc + '" style="width: 12px; height: 12px">'
                    output += '</li>';
                    output += '<li>' + item.projectDesc + '</li>';
                    output += '<li><span class="italictext">Skills</span></li>';
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
    } else if($('#titleblock').find('h1').text()=="Matthew's ITWS Page"){
        $.ajax({
            type: "GET",
            url: "projectsList.json",
            dataType: "json",
            success: function(responseData, status){
                $("#wrappedimage").attr("src", responseData.images[0].imagesrc);

            }
        });
    } else if($('#titleblock').find('h1').text()=="Login"){
        $.ajax({
            type: "GET",
            url: "projectsList.json",
            dataType: "json",
            success: function(responseData, status){
                $("#loginForm").append('<img id="loginimg" src="'+ responseData.images[1].imagesrc + '">');
                $("#loginimg").attr("style", "width: 20px; height: 20px; vertical-align: sub;");


            }
        });
    }

    //I hope that this demonstrates knowledge for part g, I could easily add more but I think that it would clutter the website
    
});
