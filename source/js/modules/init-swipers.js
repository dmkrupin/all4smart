const initWorksSwiper = () => {
  let worksSwiper = new Swiper('.works__swiper', {
    effect: "coverflow",
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
});
};

export const initSwipers = () => {
  initWorksSwiper();
};
