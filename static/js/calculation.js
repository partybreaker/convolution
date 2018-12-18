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
		return division;
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
	// var array = this.convert();

	this.matrix = function(){
		var matrix = [];
		var convert_arr = (new Click()).convert();
		// console.log(convert_arr);
		// console.log('convert_arr');
		// var len = convert_arr.length;
		// hidden_arr = (new Click()).get_hidden();
		// console.log(len);
		
		while(convert_arr.length) matrix.push(convert_arr.splice(0, 7));
		return matrix;
	}
	this.matrix_depth = function(){
		var matrix = (new Click()).matrix();
		var x = Object.keys(matrix).length
		return x;
	}
	this.range = function(){
		var n = (new Click()).matrix_depth();
		return Array(n).fill(0);
	}
	this.matrix_l = function(){
		var range = (new Click()).range();
		var dim = (new Click()).matrix_depth();
		var value = (new Click()).sum_el();
		return	(new Click()).range(dim).map(v => value);
	}
	this.matrix_mult = function(){
		var matrix_l = (new Click()).matrix_l();
		// console.log(matrix_l);
		var matrix = (new Click()).matrix();
		var result = [];
		for (i=0; i < matrix_l.length; i++){
			for(c=0; c < matrix_l[i].length; c++){
				result.push(matrix_l[i][c] * matrix[i][c]);
			}
		}
		return result;
	}
	this.conver_r = function(){
		var matrix_mult = (new Click()).matrix_mult();
		var matrix = [];
		while(matrix_mult.length) matrix.push(matrix_mult.splice(0, 7));
		return matrix;

	}
	this.convinction = function(){
		var n = (new Click()).conver_r();
		result = [];
		for (var i=0; i < n.length; i ++){
			for (var j=0; j < n[i].length; j++){
				result[i] = (result[i] || 0) + n[i][j];
			}
		}
		return result;
	}
	this.div_add = function(convinction){
		var test = (new Click()).convinction();
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
	this.store = function(){
		var array = (new Click()).convinction();
		for(i=0; i < array.length; i++){
			
		}
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