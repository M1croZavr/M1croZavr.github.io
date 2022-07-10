var myImage = document.querySelector('img');


myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/pepe_juice.jpg') {
    myImage.setAttribute('src', 'images/pepeEZ.jpg');
  }
  else {
    myImage.setAttribute('src', 'images/pepe_juice.jpg');
  }
}

myH1 = document.querySelector('h1');
myButton = document.querySelector('button');

function setUserName() {
  var name = prompt('Please, enter your name: ');
  localStorage.setItem('name', name);
  myH1.textContent = 'Pepe\'s name is ' + name;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myH1.textContent = 'Pepe\'s name is ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
