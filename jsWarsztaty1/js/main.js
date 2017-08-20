'use strict';

var button = document.getElementById('button');

function zmienTlo () {
    var para1 = document.getElementById('firstPara');
    var para2 = document.getElementById('secondPara');
    
    para1.style.backgroundColor = 'red';
    para2.style.backgroundColor = 'yellow';
}


button.onclick = zmienTlo;