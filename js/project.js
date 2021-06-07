const swiper = new Swiper('.project__row', {
    direction: 'horizontal',
    loop: true,
    slidesPerView:3,
    slidesPerGroup:1,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
    },
  });