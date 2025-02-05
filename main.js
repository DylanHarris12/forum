// your code here

var postButton = document.getElementById('submit');


postButton.addEventListener('click', function(){

  //grab name and message
  var name = document.getElementById('name').value;
  var message = document.getElementById('message').value;

  //create elements to hold individual post
  var divElement = document.createElement('div');
  var nameElement = document.createElement('p');
  var messageElement = document.createElement('p');
  var nameInput = document.createTextNode('Posted by: ' + name);
  var messageInput = document.createTextNode(message);
  
  messageElement.appendChild(messageInput);
  nameElement.appendChild(nameInput);

  var deleteButton = document.createElement('button');
  deleteButton.append('Delete');
  deleteButton.classList.add('btn','btn-primary');

  divElement.appendChild(messageElement);
  divElement.appendChild(nameElement);
  divElement.appendChild(deleteButton);
  divElement.appendChild(document.createElement('hr'));
  

  document.getElementsByClassName('posts')[0].append(divElement);
  
  deleteButton.addEventListener('click', function(){
  var messageDiv = deleteButton.parentNode;
  messageDiv.remove();
});

});

