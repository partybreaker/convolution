// TODO: Рефакторинг двух функций(чтобы они принимали значения elements)
// Первая возвращет сумму elements //
// Вторая должна делить каждый элемент на сумму всех elements

// функция расчитывает общую сумму значений вводиммых пользователем с помощью элемента html <input range>
function calcSum(){
		elements = document.getElementsByClassName('add');
		var count = elements.length;
		//::console.log(count);
		total = 0;
		for (var i=0; i < count; i++ ){
				total = total + parseInt(elements[i].value);
		}
		return total;
}
console.log(calcSum());

// P(i) - расчет приведенных значений
// p1 + p2 + ... + pn / total_sum_pi = 1
//
function calcPi(total){
		elements = document.getElementsByClassName('add');
		var count = elements.length;
		//total = 0;
		var result = [];
		for (var i=0; i <elements.length; i++){
				result.push(elements[i].value / total);
		}
		return result;
}
//console.log(calcPi(calcSum()));


hidden = document.getElementsByClassName('hidden');
// var r = 0;
var res = [];
for (var i = 0; i < hidden.length; i++){
	res.push(hidden[i].innerText);
}
//console.log(res);
elements = document.getElementsByClassName('add');
var calcPi = [];
for (var i=0; i < elements.length; i++){
	calcPi.push(elements[i].value / total);
}
console.log(calcPi);
len = calcPi.length;

function matrix_value(array, len){
	var newArr = [];
	while(array.length) newArr.push(array.splice(0, len));
	return newArr;	
}
// console.log(matrix_value(res, len));
matrix = matrix_value(res, len);
// console.log(matrix);
x = Object.keys(matrix).length;
console.log(x);

function range(n){
  return Array(n).fill(0);
}

function matrix_l(dim, value){
	return range(dim).map(v=> value);
  // return range(dim).map(v => range(dim).map(v => value));
}

console.log(matrix_l(x, calcPi));
