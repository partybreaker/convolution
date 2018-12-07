// TODO: Рефакторинг двух функций(чтобы они принимали значения elements)
// Первая возвращет сумму elements //
// Вторая должна делить каждый элемент на сумму всех elements

// функция расчитывает общую сумму значений вводиммых пользователем с помощью элемента html <input range>
function getSum(){
		elements = document.getElementsByClassName('add');
		var count = elements.length;
		//::console.log(count);
		total = 0;
		for (var i=0; i < count; i++ ){
				total = total + parseInt(elements[i].value);
		}
		return total;
}
console.log(getSum());

// P(i) - расчет приведенных значений
// p1 + p2 + ... + pn / total_sum_pi = 1
//
function getPi(total){
		elements = document.getElementsByClassName('add');
		var count = elements.length;
		//total = 0;
		var result = [];
		for (var i=0; i <elements.length; i++){
				result.push(elements[i].value / total);
		}
		return result;
}
console.log(getPi(getSum()));

// TODO: Добавить возможность скрывать div'ы
function hidden(){
}
// TODO: Сортировка div'ов по скрытым тегам

function sort_div(){
}

