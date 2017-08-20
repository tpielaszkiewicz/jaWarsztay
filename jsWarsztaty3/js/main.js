'use strict';

function obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek) {
    var oprocentowanieOpodatkowane, kapital;
    //uwzglednij podatek belki 
    if (podatek) {
        oprocentowanieOpodatkowane = 0.81 * oprocentowanie;
    } else {
        oprocentowanieOpodatkowane = oprocentowanie;
    }
    
    // oblicz wynik
    kapital = wplata * Math.pow(  (1 + oprocentowanieOpodatkowane / okresKapitalizacji) , iloscLat * okresKapitalizacji);
     // zaokraglanie do 2 miejsc po przecinku
    return kapital.toFixed(2);
}

function oblicz(event) {
    //dla forma musimy zablokowac ! zeby nie wracał na defaulty i nie wykonywał akcji
    event.preventDefault();
    // pobranie wartości z ekranu i parsowanie do floata
    var wplata = parseFloat(document.getElementById('wplata').value);
    var iloscLat = parseFloat(document.getElementById('ilosc-lat').value);
    var okresKapitalizacji = parseFloat(document.getElementById('okres-kapitalizacji').value);
    var oprocentowanie = parseFloat(document.getElementById('oprocentowanie').value / 100);
    var wynikParagraf = document.getElementById('wynik');
    //sprawdz podatek belki (zmienna podatek.checked juz sama zwroci true albo false )
    var podatek = document.getElementById('podatek').checked == true;;
    var wynik;
    //oblicz zysk
    wynik = obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek);
    wynikParagraf.innerHTML = wynik;
}
