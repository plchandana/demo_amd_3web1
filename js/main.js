
function DisplayData() {
  
  var url = 'https://jsonplaceholder.typicode.com/posts';

  
  var div = document.getElementById('jsonDisplay');

  
  fetch(url)
    .then(function(response) {
      return response.json(); 
    })
    .then(function(data) {
      
      var a = '<table>';
      
       for(var i=0;i<data.length;i++){
        if (i < data.length - 1) {
          a += '<tr>';
        
        var item=data[i];
        
        a += '<td>' + item.userId + '</td>';
        a += '<td>' + item.id + '</td>';
        a += '<td>' + item.title + '</td>';
        a += '<td>' + item.body + '</td>';
        
        a += '</tr>';
        
        //a += '<hr>';
        
      }
      };
      a += '</table';
        div.innerHTML = a;
    })
    .catch(function(error) {
      console.error('Error fetching data:', error);
    });
}

      