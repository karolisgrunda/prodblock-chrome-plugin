(function() {
	var div = document.createElement('div');
	div.style.position = 'fixed';
	div.style.top = 0;
    div.style.left = 0;
	div.style.width = '100%';
    div.style.height = '36px'
    div.style.background = '#FF0000'
    div.style.zIndex = 9999999;
    div.style.opacity = '0.5';
    div.style.display = 'flex';
    div.style.fontSize = '12px'
    div.style.color = '#FFFFFF';
    div.style.alignItems = 'center';
    div.style.justifyContent = 'center';
    div.style.pointerEvents = 'none';

	div.textContent = 'This is PROD env. Pay ATTENTION to that!!!';
	document.body.appendChild(div);

})();