function Click(){
	this.sumCalc = function(){
		elements = document.getElementsByClassName('add');
		total = 0;
		for (var i=0; i< elements.length; i++){
			total = total + parseInt(elements[i].value);
		}
	return total;
	}
	this.get_hidden = function(){
		var result = [];
		hidden = document.getElementsByClassName('hidden');
		for (var i=0; i<hidden.length; i++){
			result.push(hidden[i].innerText);
		}
	return result;
	}
	this.sum_el = function(){
		var division = [];
		element = document.getElementsByClassName('add');
		var total = (new Click()).sumCalc();
		for (var i=0; i < element.length; i++){
			division.push(element[i].value / total);
			// division.push(element[i].value / (new Click().sumCalc()));
		}
		return console.log(division);
	}
	this.convert = function(){
		var convert_arr = [];
		hidden = (new Click()).get_hidden();
		for (i=0; i<hidden.length; i++){
			var value = hidden[i].replace(",", ".");
			convert_arr.push(parseFloat(value));
		}
		return convert_arr;
	}
	this.matrix = function(convert_arr, len){
		var matrix = [];
		while(convert_arr.length) matrix.push(array.splice(0,len));
		return	matrix;
	}
	this.matrix_depth = function(matrix){
		var x = Object.keys(matrix).length
		return x
	}
	this.range = function(n){
		return Array(n).fill(0);
	}
	this.matrix_l = function(dim, value){
		return	range(dim).map(v => value);
	}
	this.matrix_mult = function(matrix_l){
		var result = [];
		for (i=0; i < matrix_l.length; i++){
			for(c=0; c < matrix_l[c].length; c++){
				result.push(matrix_l[i][c] * matrix[i][c]);
			}
		}
		return result;
	}
	this.convinction = function(n){
		result = [];
		for (var i=0; i < n.length; i ++){
			for (var j=0; k < n[i].length; j++){
				result[i] = (result[i] || 0) + n[i][j];
			}
		}
		return result
	}
	this.div_add = function(convinction){
		var span = document.getElementsByClassName('prod');
		for (i=0; i < span.length; i++){
			span[i].id = test[i];
		}
	}
	this.sort_result = function(){
		var mylist = $('#list');
		var listitem = mylist.children('div').get();
		listitem.sort(function(a,b){
			var compA = $(a).attr('id').toUpperCase();
			var compB = $(b).attr('id').toUpperCase();
			return (compA > compB) ? -1 :(compA < compB) ? 1: 0;
		})
		$.each(listitem, function(idx, itm){
			mylist.append(itm);
		});
		return mylist;
	}
}



// function outer() { 
//     function inner() {
//         console.log("hi");
//     }
//     return {
//         inner: inner
//     };
// }
// var foo = outer();
// foo.inner();