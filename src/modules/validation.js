const validation = () => {
	const forms = document.querySelectorAll('.form-horizontal');
	forms.forEach(form => {
		form.querySelectorAll('input').forEach(input => {
			input.addEventListener('blur', (e) => {
				if(e.target.name === 'fio') {
					const changeName = /[^a-zA-Zа-яА-ЯёЁ\s]/g
					e.target.value = e.target.value.replace(changeName,'')
					e.target.value = e.target.value.replace(/(\s|^)[a-zA-Zа-яА-ЯёЁ]/g, (str) => {
						return	str.toUpperCase()
					})
				}
				if(e.target.name === 'phone') {
					const changePhone = /[^0-9\+]/g
					e.target.value = e.target.value.replace(changePhone,'') 
				}
			})
		})
	})
}
export default validation