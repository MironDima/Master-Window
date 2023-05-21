import callback from './modules/callback';
import slider from './modules/slider';
import carusel from './modules/carusel';
import serviceModal from './modules/serviceModal';
import timer from './modules/timer';
import validation from './modules/validation';
import sendForm from './modules/sendForm';
import documents from './modules/documents';
import scroll from './modules/scroll';
import culculate from './modules/culculate';
import render from './modules/render';
import getData from './modules/getData';

callback()
slider()
carusel()
serviceModal()
timer({
	deadline: '30 may 2023',
	blockId: ['order_1', 'order_2'],
})
validation()
sendForm({
	idForm: ['form1', 'form2'],
	someElem: [
		{
			type: 'input',
			id: 'total'
		}
	]
})
documents()
scroll()
culculate(100)
getData('comments.json').then(data => render(data.comments))
