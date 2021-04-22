// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */



$(".search-button").click(function(){
   let userInput = $(".search-term").val()
   let mainUrl =   `https://api.giphy.com/v1/gifs/search?q='${userInput}'&rating=pg&api_key=dc6zaTOxFJmzC`;
   
  fetch(mainUrl)
    .then(function(response) {
    return response.json();
    
})
    .then(function(data) {
    // console.log(data.data[0].images.original.url)
    let imgUrl = data.data[0].images.original.url;
    let imgEl = '<img src=' + imgUrl + '>';
    $('.main').append(imgEl);
  
});
 
  

  

  
});


