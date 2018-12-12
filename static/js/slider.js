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
// function calcPi(total){
// 		elements = document.getElementsByClassName('add');
// 		var count = elements.length;
// 		//total = 0;
// 		var result = [];
// 		for (var i=0; i <elements.length; i++){
// 				result.push(elements[i].value / total);
// 		}
// 		return result;
// }
// console.log('Сумма');
// console.log(calcPi(calcSum()));



hidden = document.getElementsByClassName('hidden');
// var r = 0;
var res = [];
// var sub = [];
for (var i = 0; i < hidden.length; i++){
	res.push(hidden[i].innerText);
}
console.log('С бд');
console.log(res);
elements = document.getElementsByClassName('add');
var calcPi = [];
for (var i=0; i < elements.length; i++){
	calcPi.push(elements[i].value / total);
}
console.log('Значение ползунка деленное на сумму')
console.log(calcPi);
len = calcPi.length;

// for (var i=0,l=arr.length;i<l;i++) result.push(+arr[i]); 
var arr =[];
for (i=0; i<res.length; i ++){
	var value=res[i].replace(",", ".");
	arr.push(parseFloat(value));
}
console.log('Из str в Float')
console.log(arr);
function matrix_value(array, len){
	var newArr = [];
	while(array.length) newArr.push(array.splice(0, len));
	return newArr;	
}
// console.log(matrix_value(res, len));
matrix = matrix_value(arr, len);
// console.log(matrix);
x = Object.keys(matrix).length;
// Узнаю глубину матрицы
console.log(x);

function range(n){
  return Array(n).fill(0);
}

function matrix_l(dim, value){
	return range(dim).map(v=> value);
  // return range(dim).map(v => range(dim).map(v => value));
}
	//матрица ползунков 7хn
//console.log('FIRST ' + matrix_l(x, calcPi));
second = matrix_l(x, calcPi);
// console.log(second);
// Ошибка тут
console.log(second);
console.log(matrix);
// function multiply_m(m1, m2){
// 	var result = [];
// 	return result = math.multiply(m1, m2);
// }
var result = [];
for (i=0;i<second.length; i++){
	for(c=0;c<second[i].length; c++){
		result.push(second[i][c] * matrix[i][c]);
	}
}
console.log('чет происходит');
console.log(result);
r = matrix_value(result, len);
console.log(r);

// console.log(mult(second, matrix));
// console.log(multiply_m(second, matrix));
// console.log(multiply_m(second, matrix));


// multiplication_m = multiply_m(second, matrix);
// Тут все работает вроде
// console.log(multiply_m(second, matrix));

// m = multiply_m(second, matrix)
res1 = [];
for(var i=0;i<r.length;i++){ // Матрица => массив1 и массив2
 for(var j=0;j<r[i].length;j++){ // массив1 
  res1[i] = (res1[i] || 0) + r[i][j];
 }
}

console.log(res1);
// m.reduce(add, 0);
// function add(x, y){
// 	return x+y;
// }
// console.log(m);
// function multi(n){
// 	for(i = 0;i < n.length; i++){
// 		for(j = 0; j< n.height; j++){
// 			console.log(n[i][j])
// 		}
// 	}
// }
// console.log(multi(second));
