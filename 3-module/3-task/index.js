/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  let arr = str.split('-');
	let arrNew = arr.map(function(item, index) {
	  if (index >= 1) {
	  	return item[0].toUpperCase() + item.slice(1);
	  }else{
	  	return item;
	  }
	});
	return arrNew.join('');
}
