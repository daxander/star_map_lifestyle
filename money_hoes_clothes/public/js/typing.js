 function copper() {
  $(function(){
          $("#overlay > div").typed({
              strings: ["Hello Human.<br> ^1500 My name is <u>Copernicus</u>. ^1500<br> I'll be your guide to the stars.", 
                        "Let me tell you about some of my features. ^1500", "In the top-right corner is my control panel. ^1500", "In the bottom-left corner is your distance from the Sun. ^1500", "When you click on a star, <br> I will display information in the top-left corner. ^1500", "If you go too far off course, press the 'H' key to return to the sun. ^1500", "Happy Stargazing Human!"], 
              typeSpeed: 8
          });
      });
    setTimeout(function(){ overlay(); }, 70000);      
}
// $(function(){
//     var hitStart = {
//         strings: ["Salutations Human<br>^1000 My name is Copernicus. ^1000<br> I'll be your guide to stars."],
//                 ["Let me tell you about some of my features"]
//         typeSpeed: 8
//     }
//     $(".start").click(function(){
//         $("overlay > div").typed(hitStart);
//     });
// });