const trainerCardElementsCollection = document.querySelectorAll('.trainers__card');

const initTrainerCards = () => {
  for (let card of trainerCardElementsCollection) {
    const cardInfo = card.querySelector('.trainers__info');
    const cardPhotoHeading = card.querySelector('.trainers__photo h3');

    const hideInfo = () => {
      cardInfo.style.height = '0';
      cardPhotoHeading.style.display = 'block';
    };

    const showInfo = () => {
      cardInfo.style.height = '100%';
      cardPhotoHeading.style.display = 'none';
    };

    cardPhotoHeading.style.display = 'block';
    hideInfo();
    card.addEventListener('mouseenter', showInfo);
    card.addEventListener('mouseleave', hideInfo);
    card.addEventListener('focus', showInfo);
    card.addEventListener('blur', hideInfo);
  }
};

export {initTrainerCards};
