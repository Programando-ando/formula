var v1 = document.querySelector("#a");
var v2 = document.querySelector("#b");
var v3 = document.querySelector("#c");

let va = document.querySelector("#va");
let vb = document.querySelector("#vb");
let vc = document.querySelector("#vc");

let spinner = document.querySelector("#spinner");
let resultado= document.querySelector("#resultado");

va.innerHTML = v1.value;

v1.oninput =function(){
va.innerHTML=this.value;
calculo();
}

vb.innerHTML = v2.value;

v2.oninput =function(){
vb.innerHTML=this.value;
calculo();
}

vc.innerHTML = v3.value;

v3.oninput = function() {
  vc.innerHTML = this.value;
  calculo();
}

function calculo() {
    var a = parseFloat(v1.value);
    var b = parseFloat(v2.value);
    var c = parseFloat(v3.value);
    let x;
    let x2;


    spinner.innerHTML= "<img src='spinner.gif' width=300px>";
  setTimeout(()=>{

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        resultado.innerHTML = "<br><br>Por favor, ingresa números válidos en todos los campos";
        return;
      }

      if (a === 0) {
        resultado.innerHTML = "<br><br>No es una ecuación cuadrática válida";
        return;
      }
    
      let discriminante = Math.pow(b, 2) - 4 * a * c;
    
      if (discriminante == 0) {
        x = -b / (2 * a);
        resultado.innerHTML = "<br><br>" + x.toFixed(2);
        
      } else if (discriminante > 0) {
        x = (-b + Math.sqrt(discriminante)) / (2 * a);
        x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        resultado.innerHTML = "<br><br>x1 = " + x.toFixed(2) + "<br><br><br>x2 = " + x2.toFixed(2);

      } else {
        resultado.innerHTML = "<br><br>No tiene solución";
      }
      spinner.innerHTML = "";
  },2000);
  resultado.innerHTML="";
  }
  
  