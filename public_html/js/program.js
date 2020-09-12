/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

document.write('<p><label>Escribe los segundos a calcular: </label> <input id="numtest" type="text" name="numtest" /> <button onclick="show()">Evaluar</button></p>');
document.write('<div id="result"></div>');

function humanReadable(seconds) {
  // TODO
  var HH = Math.floor(seconds / 3600);
  HH = (HH < 10)? '0' + HH : HH;
  var MM = Math.floor((seconds / 60) % 60);
  MM = (MM < 10)? '0' + MM : MM;
  var SS = seconds % 60;
  SS = (SS < 10)? '0' + SS : SS;
  return HH + ":" + MM + ":" + SS;
}

function show(){
    document.getElementById("result").innerHTML += this.humanReadable(parseInt(document.getElementById("numtest").value));
}

