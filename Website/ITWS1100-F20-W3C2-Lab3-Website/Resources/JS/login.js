

$(document).ready(function() {


    if(Cookies.get('user')!=""){
        currentUser=name;
        document.getElementById("loginMenu").innerHTML="Logout";
        var loginform = document.getElementById("loginForm");
        if(loginform!=null){
            loginform.style = "display: none";
        }
        var signout = document.getElementById("signout");
        if (signout!=null){
            signout.style="display: inline";
        }
        var element = document.getElementById("loginStatus");
        if (element!=null){
            element.innerHTML="Welcome " + Cookies.get('user') + "<br />";
            element.className="successtext";
            element.style.display="inline";
        }
        
    }
    



    $("#submit").click(function() {
       var username = $("#loginUser").val();
       var pass = $("#loginPass").val();

       if(username=="" || pass==""){
            var element = document.getElementById("loginStatus");
            element.innerHTML="Please enter both a username and password";
            element.className="errortext";
            element.style.display="inline";
       } else {

        $.ajax({
            type: "GET",
                url: "Resources/usersXML.xml",
                dataType: "xml",
                success: function(responseData){
                var found = false;
                var error = false;
                 $(responseData).find("user").each(function() {
                    var name = $(this).find('userid').text();
                    if(username==name){
                        if(pass == $(this).find('password').text()){
                            found = true;
                        } else {
                            error = true;
                        }
                    }
              });
              if (!found || error){
                var element = document.getElementById("loginStatus");
                element.innerHTML="<br />Invalid username or password";
                element.className="errortext";
                element.style.display="inline";
              } else {
                var loginform = document.getElementById("loginForm");
                loginform.style = "display: none";
                document.getElementById("signout").style="display: inline";
                var element = document.getElementById("loginStatus");
                element.innerHTML="Welcome " + username + "<br />";
                element.className="successtext";
                element.style.display="inline";

                Cookies.set('user', username);
                
              }
            }, error: function(msg) {
              alert("There was a problem: " + msg.status + " " + msg.statusText);
            }
          });


       }
     });

     $("#signout").click(function() {
        document.getElementById("loginStatus").style="display: none";
        document.getElementById("loginForm").style="display: inline";
        document.getElementById("signout").style="display: none";
        document.getElementById("loginMenu").innerHTML="Login";
        $("#loginUser").val('');
        $("#loginPass").val('');
        Cookies.set('user', '');
     });
   
});


