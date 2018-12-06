// TODO: Рефакторинг двух функций(чтобы они принимали значения elements)
// Первая возвращет сумму elements
// Вторая должна делить каждый элемент на сумму всех elements
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
function getPi(total){
		elements = document.getElementsByClassName('add');
		var count = elements.length;
		//total = 0;
		var result = [];
		for (var i=0; i <elements.length; i++){
				//total = total + parseInt(elements[i].value);
				//console.log(total + ' ' + i);
				result.push(elements[i].value / total);
			//	console.log(result);
		}
		return result;
}
console.log(getPi(getSum()));
// Контрольные значения
ele = document.getElementsByClassName('add');
console.log(ele[0].value + ' ' + ele[1].value + ' ' + ele[2].value + ' ' + ele[3].value + ' ' + ele[4].value + ' ' + ele[5].value + 
	' ' + ele[6].value);
