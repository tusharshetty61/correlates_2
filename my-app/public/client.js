console.log('Client-side code running');

const button = document.getElementById('get-link');
const button1 = document.getElementById('retrieve');
button.addEventListener('click', function(e) {
  console.log('button was clicked');

  fetch('http://localhost:8080/clicked', {method: 'GET'})
    .then(function(response) {
      if(response.ok) {
        console.log('Click was recorded');
        return response.json();
      }
      throw new Error('Request failed.');
    })
    .then(function(data){
      console.log(data);
      let copyText = data[0].link; 
      navigator.clipboard.writeText(copyText)
      console.log("Copied the text: " + copyText);
    })
    .catch(function(error) {
      console.log(error);
    });
});

//setInterval(function() {
 //   fetch('http://localhost:8080/clicks', {method: 'GET'})
      
//      .then(function(data) {
//        document.getElementById('counter').innerHTML = `Button was clicked ${data[0]} times`;
 //     })
 //     .catch(function(error) {
 //     console.log(error);
 //     });
 // }, 1000);

button1.addEventListener('click', function(e) {
  console.log('button was clicked');

  fetch('http://localhost:8080/show_deets', {method: 'GET'})
    .then(function(response) {
      if(response.ok) {
        console.log('Click was recorded');
        console.log(response);
        return response.json();
      }
      throw new Error('Request failed.');
    })
    .then(function(data){
      console.log(data);
      for (let i=0; i<data.length ;i++){
        var tag1 = document.createElement("p");
        var tag2= document.createElement("p");
        var tag3= document.createElement("p");
        var tag4= document.createElement("p");
        console.log(data)
        console.log(data[i].rating)
        var text1 = document.createTextNode("User" + (i+1).toString());
        var text2 = document.createTextNode(data[i].rating);
        var text3 = document.createTextNode(data[i].shortAns);
        var text4= document.createTextNode(data[i].sliderVal);
        tag1.appendChild(text1);
        tag2.appendChild(text2);
        tag3.appendChild(text3);
        tag4.appendChild(text4);
        var element = document.getElementById("new");
        element.appendChild(tag1);
        element.appendChild(tag2);
        element.appendChild(tag3);
        element.appendChild(tag4);
      };
    })
    .catch(function(error) {
      console.log(error);
    });
});

