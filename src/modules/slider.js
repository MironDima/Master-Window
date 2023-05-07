import Swiper, { Navigation } from 'swiper';
const slider = () => {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".slider-button-next",
      prevEl: ".slider-button-prev",
    },
    loop: true,
    breakpoints: {
      576: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

}

export default slider