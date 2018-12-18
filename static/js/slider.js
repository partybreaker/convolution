// TODO: Рефакторинг двух функций(чтобы они принимали значения elements)
// Первая возвращет сумму elements //
// Вторая должна делить каждый элемент на сумму всех elements

// функция расчитывает общую сумму значений вводиммых пользователем с помощью элемента html <input range>

function Click(){
	var s = calcSum();
	return s;
}

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
// document.getElementById('toggle-button').addEventListener('click', function () {
//     calcSum(document.querySelectorAll('.add'));
// });

// function calcSum(elements){
// 	var element = [];
// 	var total;
// 	elements = elements.length ? elements : [elements];
// 	for (var i=0; i<elements.length; i++){
// 		element.push(parseInt(elements[i].value));

// 		// total = total + parseInt(elements[i].value)
// 	}
// 	var total = element.reduce((a, b ) => a+b, 0);
// 	return total
// 		// return console.log(element);
// }

var total = Click();
console.log(total);




// P(i) - расчет приведенных значений
// p1 + p2 + ... + pn / total_sum_pi = 1
//
hidden = document.getElementsByClassName("hidden"); //is-sr-only
// var r = 0;
var res = [];
// var sub = [];
for (var i = 0; i < hidden.length; i++){
	res.push(hidden[i].innerText);
}
console.log('С бд');
console.log(res);
function SumEl(){
	element = document.getElementsByClassName('add');
	var calcPi = [];
	for (var i=0; i < element.length; i++){
		calcPi.push(element[i].value / total);
	}
	return calcPi;
}

var calcPi = SumEl();
console.log('Значение ползунка деленное на сумму')
console.log(calcPi);
len = calcPi.length;

// for (var i=0,l=arr.length;i<l;i++) result.push(+arr[i]); 
var arr =[];
for (i=0; i<res.length; i ++){
	var value=res[i].replace(",", ".");
	arr.push(parseFloat(value));
}
// console.log('Из str в Float')
// console.log(arr);
function matrix_value(array){
	var newArr = [];
	while(array.length) newArr.push(array.splice(0, len));
	return newArr;	
}
console.log('asd');
//console.log(matrix_value(res, len));
matrix = matrix_value(arr, len);
console.log('matrix');
console.log(matrix);
// console.log(matrix);
x = Object.keys(matrix).length;
// Узнаю глубину матрицы n
// console.log(x);

function range(n){
  return Array(n).fill(0);
}

function matrix_l(dim, value){
	return range(dim).map(v=> value);
}
// матрица ползунков 7хn
//console.log('FIRST ' + matrix_l(x, calcPi));
second = matrix_l(x, calcPi);
// console.log(second);
//Ошибка тут
console.log(second);
var result = [];
for (i=0;i<second.length; i++){
	for(c=0;c<second[i].length; c++){
		result.push(second[i][c] * matrix[i][c]);
	}
}
// console.log('чет происходит');
// console.log(result);
var r = matrix_value(result, len);
console.log(r);

function convi(r){
	res1= [];
	for(var i=0; i < r.length; i++){
		for(var j=0; j < r[i].length; j++){
			res1[i] = (res1[i] || 0) + r[i][j];
		}
	}
	return res1;
}
// res1 = [];
// for(var i=0;i<r.length;i++){ // Матрица => массив1 и массив2
//  for(var j=0;j<r[i].length;j++){ // массив1 
//   res1[i] = (res1[i] || 0) + r[i][j];
//  }
// }


function change(){
	convi(r);
}

var test = change();
// console.log(test);
// var users = document.getElementById('td');
var span = document.getElementsByClassName('prod');//[0].innerHTML = 'value';
console.log(span);
for (i=0; i < span.length; i++){
	span[i].id = test[i];
}

function result_sort(){
var mylist = $('#list');
var listitems = mylist.children('div').get();
listitems.sort(function(a, b) {
    var compA = $(a).attr('id').toUpperCase();
    var compB = $(b).attr('id').toUpperCase();
    return (compA > compB) ? -1 : (compA < compB) ? 1 : 0;
})
$.each(listitems, function(idx, itm) {
    mylist.append(itm);
});
return mylist;
}



