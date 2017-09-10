'use strict';

//var istniejacyWezel = document.getElementById('parFirst').children[3];
//
//console.log(document.getElementById('parFirst').children);
//
//console.log(istniejacyWezel);
//
//var newElement = document.createElement('p');
//
//console.log(newElement);
//
//var newElementContent = document.createTextNode ('To jest nowy paragraf');
//
//console.log(newElementContent);
//
//newElement.appendChild(newElementContent);
//
//istniejacyWezel.appendChild(newElement);
//istniejacyWezel.removeChild(newElement);
//
//var parFirstDiv = document.getElementById('parFirst');
////console.log(parFirstDiv);
//parFirstDiv.replaceChild(newElement, istniejacyWezel);


var alllinks = document.querySelectorAll('a');
console.log(alllinks);

for (var i=0; i<alllinks.length; i++) {
    console.log(alllinks[i]);
    var br = document.createElement('br');
    
    alllinks[i].parentNode.insertBefore9br, alllinks[i].nextSibling;
    
    alllinks[i].removeAttribute('class');
}

