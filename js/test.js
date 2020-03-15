// let form = document.querySelector('.select-form'),
// 	select = form.getElementsByTagName('input');

// 	form.addEventListener('submit', function(event){
// 		event.preventDefault();

// 		let request = new XMLHttpRequest();
// 		request.open('POST', 'server.php');
// 		request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

// 		let formData = new FormData(form);
// 		request.send(formData);
// 	});

	var app = new Vue({
        el: '#app',
        data: {
			strength: 'Выберите крепкость...',
			flavor: 'Выберите вкус...',
			aroma: 'Выберите направление...',
        }
    });