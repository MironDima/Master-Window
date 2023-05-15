import callback from './modules/callback';
import slider from './modules/slider';
import carusel from './modules/carusel';
import serviceModal from './modules/serviceModal';
import timer from './modules/timer';
import validation from './modules/validation';
import sendForm from './modules/sendForm';
import documents from './modules/documents';
import scroll from './modules/scroll';

callback()
slider()
carusel()
serviceModal()
timer({
	deadline: '23 may 2023',
	blockId: ['order_1', 'order_2']
})
validation()
sendForm({
	idForm:['form1','form2']
})
documents()
scroll()