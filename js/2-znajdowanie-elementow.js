'use strict';

var parFirst = document.getElementById('parFirst');
console.log(parFirst);

var linki = document.getElementsByClassName('superlink');
console.log(linki);

var linkiPoTagu = document.getElementsByTagName('a');
console.log(linkiPoTagu);

var divPoID = document.querySelector('#parSecond');
console.log(divPoID);

var pierwszyLinkPoSelektorze = document.querySelector('.superlink');
console.log(pierwszyLinkPoSelektorze);

var linkiPoSelektorze = document.querySelectorAll('.superLink');
console.log(linkiPoSelektorze);

linkiPoSelektorze.forEach( function(link, i){
    console.log(link.outerHTML);
});