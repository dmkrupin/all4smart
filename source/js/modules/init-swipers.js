const initWorksSwiper = () => {
  let worksSwiper = new Swiper('.works__swiper .swiper', {
    effect: "cards",
    grabCursor: true,
  });
};

export const initSwipers = () => {
  initWorksSwiper();
};
