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
var r = 0;
var res = [];
for (var i = 0; i < hidden.length; i++){
	res.push(hidden[i].innerText);
}
console.log(res);
elements = document.getElementsByClassName('add');
var calcPi = [];
for (var i=0; i < elements.length; i++){
	calcPi.push(elements[i].value / total);
}
console.log(calcPi);

// Конвертация массива в матрицу (n) - размерности
// n = res.length / calcPi.length
//

// Принимает матрицу и массив целлых чисел. Умножение описывает след формула:
// p = [p1,p2,p3,p4,
// 	p5,p6,p7,p8,
// 	..., pn]
// m = [m1, m2,m3, mn]
//
// result = [p1*m1, p2*m1,p3*m1,..., pn*m1, ....]
//
function multiply_matrix(){
	while(i = 0; i < p.length){

	}
}
// TODO: Сортировка div'ов по скрытым тегам



