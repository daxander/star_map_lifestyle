function ajax(){
  console.log("Sending request to server...")
  $.ajax({
    url: 'http://localhost:3000/index',
    method: 'GET',
    type: 'json',
    success: function(data) {
      console.log('working');
      sphereMaker(data);
    }
  });
}