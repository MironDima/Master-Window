import Swiper, { Navigation, Autoplay } from 'swiper';
const slider = () => {
  const swiper = new Swiper('.benefits-inner', {
    modules: [Navigation, Autoplay],
    slidesPerView: 1,
    spaceBetween: 5,
    navigation: {
      nextEl: ".slider-button-next",
      prevEl: ".slider-button-prev",
    },
    autoplay: {
      	delay: 1000,
      	disableOnInteraction: false,
      },
    loop: true,
    breakpoints: {
      576: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  });
}
export default slider