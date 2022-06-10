console.log('Client-side code running');

const button = document.getElementById('get-link');
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
      let copyText = data[0]; 
      navigator.clipboard.writeText(copyText)

    })
    .catch(function(error) {
      console.log(error);
    });
});

setInterval(function() {
    fetch('http://localhost:8080/clicks', {method: 'GET'})
      
      .then(function(data) {
        document.getElementById('counter').innerHTML = `Button was clicked ${data[0]} times`;
      })
      .catch(function(error) {
        console.log(error);
      });
  }, 1000);




