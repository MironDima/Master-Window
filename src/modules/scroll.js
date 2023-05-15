const scroll = () => {
	const scrollBtn = document.querySelector('.smooth-scroll');

	const hidden = () => {
		scrollBtn.style.display = 'none';
	}
	hidden()
	const show = () => {
		scrollBtn.style.display = 'block';
	}


	document.addEventListener('scroll', () => {
		let scrollY = window.scrollY;
		if(scrollY < 400){
			hidden()
		}
		else {
			show()
		}
	})

	scrollBtn.addEventListener('click', () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth"
		})
	})

}
export default scroll