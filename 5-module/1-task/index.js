function hideSelf() {
  const btn = document.querySelector('.hide-self-button');
  btn.onclick = function() {
  	btn.setAttribute('hidden', 'hidden');
  };
}
