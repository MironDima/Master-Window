import Swiper, { Navigation} from 'swiper';
const carusel = () => {
	const swiperCarusel = new Swiper('.mySwiper', {
		modules: [Navigation],
		slidesPerGroup:1,
		navigation: {
			nextEl: ".slider-button-next",
			prevEl: ".slider-button-prev",
		},
		loop: true,
		
	})
}

export default carusel