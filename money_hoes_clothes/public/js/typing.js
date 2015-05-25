 function copper() {
  $(function(){
          $("#overlay > div").typed({
              strings: ["Hello.<br> ^1500 My name is <u>Copernicus</u>. ^1500<br> I'll be your guide to stars.", 
                        "Let me show you some of my features.", "In the top-right is my control panel. ^1500", "In the bottom-left your distance from our Sun. ^1500", "When you click on a star, <br> I will grab some information from the NASA API. ^1000", "If you go too far press the 'H' key to return to the sun. ^1000", "Enjoy!"], 
              typeSpeed: 8
          });
      });
    setTimeout(function(){ overlay(); }, 53000);      
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