let form = document.querySelector('form');

export const initFormValidation = () => {
  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
  });
};
