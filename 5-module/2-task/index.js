function toggleText() {
  const btn = document.querySelector('.toggle-text-button'),
		    text = document.querySelector('#text');
	btn.addEventListener('click', function() {
		if (!text.hasAttribute('hidden')) {
			text.setAttribute('hidden', 'hidden');
		}else{
			text.removeAttribute('hidden');
		}
	});
}
