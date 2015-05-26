 function copper() {
  $(function(){
          $("#overlay > div").typed({
              strings: ["Hello Human.<br> ^1500 My name is <u>Copernicus</u>. ^1500<br> I'll be your guide to stars.", 
                        "Let me tell you about some of my features. ^1500", "In the top-right is my control panel. ^1500", "In the bottom-left your distance from our Sun. ^1500", "When you click on a star, <br> I will grab some information from the NASA API. ^1500", "If you go too far press the 'H' key to return to the sun. ^1500", "Press the 'X' key to toggle the axis <br> ^1500 and 'C' to toggle constellations", "Happy Stargazing Human!"], 
              typeSpeed: 8
          });
      });
    setTimeout(function(){ overlay(); }, 68000);      
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