document.addEventListener('DOMContentLoaded', function () {
    let input = document.getElementById('input box');
    let buttons = document.querySelectorAll('buttuon');

    let string = " ";

    buttons.forEach(button =>{
        button .addEventListener('click',(e) => {
            if (e.target.innerHTML === '='){
                string = eval(string);
                input.value =string;
            }else if (e.target.innerHTML === 'AC'){
                string = " ";
                input.value = string;
            } else if (e.target.innerHTML === 'DE') {
                string = string.substring(0, string.length -1);
                input.value = string ;
            } else {
                string += e.target.innerHTML;
                input.value = string;
            }
        });
    });
}) ;




let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;
let f = 6;
let g = 7;
let h = 8;
let i = 9;
let j = 10;
let k = 11;
let l = 12;
let m = 13;
let n = 14;
let o = 15;
let p = 16;
let q = 17;
let r = 18;
let s = 19;
let t = 20;
let u = 21;
let v = 22;
let w = 23;
let x = 24;
let y = 25;
let z = 26;

// Functions
function add() {
 a = a + b;
 b = a % 1000;
 a = Math.floor(a / 1000);
}

function multiply() {
 c = b * d;
 d = c % 1000;
 c = Math.floor(c / 1000);
}

function printResult() {
 console.log("Result: " + (d * 1000 + c) + ", Carry: " + b);
}

// Assembly Code Simulation
while (true) {
 if (n == 1) {
    if (a > 0) {
      n = 0;
      b = 1;
      printResult();
    } else {
      break;
    }
 } else {
    if (b > 0) {
      b = b - 1;
      multiply();
      a = a + 1;
      if (a == 0) {
        n = 1;
      }
    } else {
      add();
    }
 }
}

