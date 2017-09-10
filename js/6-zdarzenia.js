'use strict';
//
//var secondLink = document.getElementsByTagName('a')[1];//tworzymy zmienna z drugim linkiem
//
//function alarm(e) {
//    e.preventDefault(); //zapobiegamy domyslnej akcji
//    console.log('kliknieto kolejny link');
//    
//    console.log(e.type);
//}
//
//secondLink.onclick = alarm; //podpinamy funkcje 'alarm' na drugim linku po kliknieciu
//
//
//var thirdLink = document.getElementsByTagName('a')[2]; //tworzymy zmienna z trzecim linkiem
//
//thirdLink.addEventListener('click', alarm); //wywolujemy funkcje alarm() na tzrecim linku po kliknieciu za pomoc event Listenera
//
//thirdLink.removeEventListener('click', alarm);
//
//var mainHeader = document.getElementById('main-header');
//
//
//function resize(e) { //przekazujemy zdarzenie jako parametr funkcji
//    if (e.type == 'mouseover') {  //sprawdzenie typu zdarzenia
//        mainHeader.style.fontSize = "70px";  //zmiana wielosci fonta po najehcaniu
//    }
//    else {
//        mainHeader.style.fontSize = "inherit"; //przywroc domyslna wielkosc po zjechaniu
//    }
//}
//
//mainHeader.onmouseover = resize; //wywolanie funkcji resize po najechaniu myszka na naglowek
//
//mainHeader.onmouseout = resize; //wywolanie funkcji resize po zjechaniu myszka z naglowka

// zatrzymanie propagacji- po kliknieciu w anglowek console.log(...)
// wywola sie dwa razy- dodajemy zatrzymanie propagacji w console.log(...)
// wywoluje sie raz
function klikHeader() {
    console.log("kliknoles w header");
}

document.getElementsByTagName('header')[0].onclick = klikHeader;  //wywolaj funkcje na elemencie header


function klikH1(e) {
    e.stopPropagation(); //Odkomentowac zeby pokazac zatzrymanie propagacji
    console.log("kliknoles w h1");
}

document.getElementsByTagName('h1')[0].onclick = klikH1; //wywolaj funkcje na elementach H1









