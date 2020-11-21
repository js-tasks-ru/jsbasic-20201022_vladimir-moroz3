/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let ul = document.createElement('ul');

	let arrFullNames = friends.map(item => ([item.firstName + " " + item.lastName]));

	for (let fullName of arrFullNames) {
	  ul.innerHTML += ( `<li>${fullName}</li>` );
	}
  
  return ul;
}
