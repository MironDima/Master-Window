import { renderCommets } from "./renderCommets";
const render = (data) => {
	const blockComments = document.querySelector('.comments-container');
	renderCommets(blockComments);
	const commentsItem = blockComments.querySelectorAll('.comments-item');
	const imgUser = blockComments.querySelectorAll('.review-user');
	const nameUser = blockComments.querySelectorAll('.text-normal');
	const reviewText = blockComments.querySelectorAll('.text-normal ~ p');
	let defaultImg = 'images/users/defaultFace.png'

	const deleteComments = () => {
		 setInterval(() => {
			let firstRevies = data.splice(data[0], 1)[0]
			console.log(firstRevies);
			data.splice(data.length, 1, firstRevies)
			console.log(data);
			renderComments()
		}, 10000)
	}

	const renderComments = () => {
		commentsItem.forEach((coment, index) => {
			imgUser[index].textContent = ''
			imgUser[index].insertAdjacentHTML('beforeend',
				`<img src= "${data[index].image == '' ? defaultImg : data[index].image}" class="img-responsive avatar">`);
			nameUser[index].innerHTML = data[index].author
			reviewText[index].innerHTML = data[index].comment
		})
	}
	renderComments()
	deleteComments()
}
export default render