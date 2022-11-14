const servicesCardElementsCollection = document.querySelectorAll('.services__key-points-item');

const initServicesCards = () => {
  for (let card of servicesCardElementsCollection) {
    const cardInfo = card.querySelector('.services__key-points-cover');

    const hideInfo = () => {
      cardInfo.style.height = '0';
    };

    const showInfo = () => {
      cardInfo.style.height = '100%';
    };

    hideInfo();
    card.addEventListener('mouseenter', showInfo);
    card.addEventListener('mouseleave', hideInfo);
    card.addEventListener('focus', showInfo);
    card.addEventListener('blur', hideInfo);
  }
};

export {initServicesCards};