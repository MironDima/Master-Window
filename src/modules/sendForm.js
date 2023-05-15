const sendForm = ({ idForm, someElem = [] }) => {
	idForm.forEach(forms => {
		const total = document.getElementById('total');
		const form = document.getElementById(forms);
		let div = document.createElement('div');
		div.classList.add('style');
		let succesText = 'Данные отправлены!';
		let errorText = 'Ошибка!';
		let loadText = 'Загрузка...';

		const validate = (inputs) => {
			let succes = true;
			inputs.forEach(input => {
				if (input.name === 'fio') {
					if (input.value.length < 3) {
						succes = false;
						input.style.border = '1px solid red';
					}
				}
				else if (input.name === 'phone') {
					if (input.value.length < 9 || input.value.length >= 16) {
						succes = false;
						input.style.border = '1px solid red';
					}
				}
			})
			return succes
		}
		const sendData = (data) => {
			return fetch('https://jsonplaceholder.typicode.com/posts', {
				method: 'POST',
				body: JSON.stringify(data),
				headers: {
					"Content-type": 'application/json'
				}
			}).then(res => res.json())
		}

		const submitForm = () => {
			const inputs = form.querySelectorAll('input');
			const formData = new FormData(form);
			const formBody = {}

			formData.forEach((val, key) => {
				formBody[key] = val;
			})

			form.append(div)
			div.classList.remove('error');
			div.textContent = loadText;

			someElem.forEach(elem => {
				const totalCulc = document.getElementById(elem.id)
				console.log(totalCulc.value);
				if(totalCulc.value > 0) {
					if (elem.type === 'input') {
						formBody[elem.id] = totalCulc.value
					} else if (elem.type === 'block') {
						formBody[elem.id] = totalCulc.textContent
					}
				}
			})

			if (validate(inputs)) {
				sendData(formBody)
					.then(data => {
						div.textContent = succesText;
						inputs.forEach(input => {
							input.value = '';
							input.style.border = '';
							div.classList.remove('error');
						})
						setTimeout(() => {
							div.textContent = '';
						}, 2000)
					})
					.catch(error => div.textContent = errorText);
			} else {
				alert('Данные не валидны!');
				div.classList.add('error')
				div.textContent = errorText;
			}
		}

		form.addEventListener('submit', (e) => {
			e.preventDefault()
			submitForm();
		})
	});
}
export default sendForm