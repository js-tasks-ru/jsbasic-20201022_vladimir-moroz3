/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
    let arr = str
		.split(",")
		.join(" ")
		.split(" ")
		.sort( (a, b) => a - b );

	let min = arr.splice(0,1).join();
	let max = arr.splice(-1,1).join();

	return result = {min: +(`${min}`), max: +(`${max}`)}
}
