'use strict';

var mainHeader = document.getElementById('main-header');

mainHeader.innerHTML = "Treść naglówka";


var link = document.getElementsByClassName('link')[0];

link.href = "http://akademia108.pl";

link.target = "_blanck";

link.className = "nowaKlasa";

mainHeader.style.color = "#11aa22";