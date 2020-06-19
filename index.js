//Calculator Grid
var grid = document.createElement("div");
grid.setAttribute("class", "calculator-grid");
grid.setAttribute("id", "grid");
document.body.append(grid);
//Output Display
var ope = document.createElement("div");
ope.setAttribute("class", "output");
ope.setAttribute("id", "op");
document.getElementById("grid").appendChild(ope);
//Previous Element
var pre = document.createElement("div");
pre.setAttribute("class", "prev");
pre.setAttribute("id", "prev");
document.getElementById("op").appendChild(pre);
//Current Element
var curr = document.createElement("div");
curr.setAttribute("class", "current");
curr.setAttribute("id", "cur");
document.getElementById("op").appendChild(curr);
//Button AC
var buttonAC = document.createElement("button");
buttonAC.setAttribute("class", "span2");
buttonAC.setAttribute("onclick", "clearAll()");
buttonAC.innerHTML = "AC";
document.getElementById("grid").appendChild(buttonAC);
//Button DEL
var buttonDEL = document.createElement("button");
buttonDEL.setAttribute("onclick", "clearDel()");
buttonDEL.innerHTML = "DEL";
document.getElementById("grid").appendChild(buttonDEL);
//Button division
var buttondiv = document.createElement("button");
buttondiv.setAttribute("onclick", "chooseOp('÷')");
buttondiv.innerHTML = "÷";
document.getElementById("grid").appendChild(buttondiv);
//Button1
var button1 = document.createElement("button");
button1.setAttribute("onclick", "appendNumber('1')");
button1.innerHTML = "1";
document.getElementById("grid").appendChild(button1);
//Button2
var button2 = document.createElement("button");
button2.setAttribute("onclick", "appendNumber('2')");
button2.innerHTML = "2";
document.getElementById("grid").appendChild(button2);
//Button3
var button3 = document.createElement("button");
button3.setAttribute("onclick", "appendNumber('3')");
button3.innerHTML = "3";
document.getElementById("grid").appendChild(button3);
//Button Multiplication
var buttonmul = document.createElement("button");
buttonmul.setAttribute("onclick", "chooseOp('x')");
buttonmul.innerHTML = "x";
document.getElementById("grid").appendChild(buttonmul);
//Button4
var button4 = document.createElement("button");
button4.setAttribute("onclick", "appendNumber('4')");
button4.innerHTML = "4";
document.getElementById("grid").appendChild(button4);
//Button5
var button5 = document.createElement("button");
button5.setAttribute("onclick", "appendNumber('5')");
button5.innerHTML = "5";
document.getElementById("grid").appendChild(button5);
//Button6
var button6 = document.createElement("button");
button6.setAttribute("onclick", "appendNumber('6')");
button6.innerHTML = "6";
document.getElementById("grid").appendChild(button6);
//Button Addition
var buttonadd = document.createElement("button");
buttonadd.setAttribute("onclick", "chooseOp('+')");
buttonadd.innerHTML = "+";
document.getElementById("grid").appendChild(buttonadd);
//Button7
var button7 = document.createElement("button");
button7.setAttribute("onclick", "appendNumber('7')");
button7.innerHTML = "7";
document.getElementById("grid").appendChild(button7);
//Button8
var button8 = document.createElement("button");
button8.setAttribute("onclick", "appendNumber('8')");
button8.innerHTML = "8";
document.getElementById("grid").appendChild(button8);
//Button9
var button9 = document.createElement("button");
button9.setAttribute("onclick", "appendNumber('9')");
button9.innerHTML = "9";
document.getElementById("grid").appendChild(button9);
//Button Subtraction
var buttonsub = document.createElement("button");
buttonsub.setAttribute("onclick", "chooseOp('-')");
buttonsub.innerHTML = "-";
document.getElementById("grid").appendChild(buttonsub);
//Buttondot
var buttondot = document.createElement("button");
buttondot.setAttribute("onclick", "appendNumber('.')");
buttondot.innerHTML = ".";
document.getElementById("grid").appendChild(buttondot);
//Buttonzero
var button0 = document.createElement("button");
button0.setAttribute("onclick", "appendNumber('0')");
button0.innerHTML = "0";
document.getElementById("grid").appendChild(button0);
//Equal
var equals = document.createElement("button");
equals.setAttribute("onclick", "compute()");
equals.setAttribute("class", "span2");
equals.innerHTML = "=";
document.getElementById("grid").appendChild(equals);

//Functionalities of the Calculator

var operation = undefined;
var previous = "";
var current = "";
function appendNumber(num) {
  //period can be typed out only once ...to prevent repetitive period use ,we deploy if loop
  if (num == "." && cur.innerText.includes(".")) return;
  var x = document.getElementById("cur");
  x.innerText = x.innerText.toString() + num.toString();
  current = x.innerText;
}

function compute() {
  var result;
  const a = parseFloat(previous);
  const b = parseFloat(current);
  switch (operation) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "x":
      result = a * b;
      break;
    case "÷":
      result = a / b;
      break;
    default:
      return;
  }
  var p = document.getElementById("cur");
  p.innerText = result.toString();
  var q = document.getElementById("prev");
  q.innerText = "";
  previous = result.toString();
  current = result.toString();
  operation = undefined;
}
function chooseOp(op) {
  if (previous && current) {
    console.log("ji");
    compute();
    // previous = result.toString();
    var j = document.getElementById("prev");
    j.innerText = previous.toString();
    var k = document.getElementById("cur");
    k.innerText = "";
    operation = op;
    current = "";
  } else {
    operation = op;
    previous = current;
    current = "";
    cur.innerText = "";
    var y = document.getElementById("prev");
    y.innerText = previous;
  }
}
function clearAll() {
  previous = "";
  current = "";
  var f = document.getElementById("cur");
  f.innerText = "";
  var g = document.getElementById("prev");
  g.innerText = "";
}
function clearDel() {
  var r = document.getElementById("cur");
  r.innerText = r.innerText.toString().slice(0, -1);
  current = current.toString().slice(0, -1);
}
