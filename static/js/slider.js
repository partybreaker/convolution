// var slider = document.getElementById("formControlRange");
// var output = document.getElementById("demo");
// output.innerHTML = slider.value;

// slider.oninput = function() {
//   output.innerHTML = this.value / 55;
// }

// var camRange = document.getElementById("camRange");
// var cam = document.getElementById("cam");
// cam.innerHTML = camRange.value;

// camRange.oninput = function() {
//   cam.innerHTML = this.value / 55;
// }
// var cpuRange = document.getElementById("cpuRange");
// var cpu = document.getElementById("cpu");
// cpu.innerHTML = cpuRange.value;

// cpuRange.oninput = function() {
//   cpu.innerHTML = this.value / 55;
// }
// var romRange = document.getElementById("romRange");
// var rom = document.getElementById("rom");
// rom.innerHTML = romRange.value;

// romRange.oninput = function() {
//   rom.innerHTML = this.value / 55;
// }
// var screenRange = document.getElementById("screenRange");
// var screen = document.getElementById("screen");
// screen.innerHTML = screenRange.value;

// screenRange.oninput = function() {
//   screen.innerHTML = this.value / 55;
// }
// var battaryRange = document.getElementById("battaryRange");
// var battary = document.getElementById("battary");
// battary.innerHTML = battaryRange.value;

// battaryRange.oninput = function() {
//   battary.innerHTML = this.value / 55;
// }
// var priceRange = document.getElementById("priceRange");
// var price = document.getElementById("price");
// price.innerHTML = priceRange.value;

// priceRange.oninput = function() {
//   price.innerHTML = this.value / 55;
// }


$(".add").on("change", function() {
  addAll();
});

addAll();

function addAll() {
    sum = 0; // you had a missing semi-colon here
    $('.add').each(function (){        
 //      sum =  
       sum += parseFloat(this.value) || 0; // the other line works but this is simpler and shorter, if for any reason the value returned isn't a number it will choose a zero.
    	// then result_sum = each_element / sum_all_elements
    });
    $('#total').html(sum);
}
console.log(window.sum);
var element = document.getElementById('');
var sortedArray = $("div[class^='wrap']").get().sort(function(a, b) {
   var idx = parseInt($(a).find(".sort_by").val(), window.sum);
   var idx2 = parseInt($(b).find(".sort_by").val(), window.sum);
   return idx > idx2;
});
// $(sortedArray).appendTo("body");

// function sortUsingNestedText(parent, childSelector, _mode) {
// 	let mode = ['asc', 'desc'].includes(_mode) ? _mode : 'asc';
// 	let items = parent.children(childSelector).sort(function(a, b) {
//         let vA = $(a).data('number');
//         let vB = $(b).data('number');
//         switch(mode){
//         	case 'asc':
//             	return (vA < vB) ? -1 : (vA > vB) ? 1 : 0;
//                 break;
//         	case 'desc':
//             	return (vA > vB) ? -1 : (vA < vB) ? 1 : 0;
//                 break;
//         }
        
//     });
//     parent.append(items);
// }

// $(".link1").on('click', function(e){
// 	sortUsingNestedText($('#container'), "div", "asc");
// });

// $(".link2").on('click', function(e){
// 	sortUsingNestedText($('#container'), "div", "desc");
// });
