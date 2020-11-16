Change window to RPI.edu: <script>window.location = "https://www.rpi.edu";</script>

I believe what is happening is through an unsecured input, by submitting the text inside the textarea, the javascript is forced to interpret the 
script tag as something other than text, allowing code to be run inside of the textbox.
