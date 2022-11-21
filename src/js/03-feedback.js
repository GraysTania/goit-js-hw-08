import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  formEmail: document.querySelector('.feedback-form input'),
  formMessage: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('input', throttle(handleInputForm, 500));
refs.form.addEventListener('submit', handleSubmitForm);

const STORAGE_KEY = 'feedback-form-state';

function handleInputForm(e) {
  const objForm = {
    email: 'refs.formEmail.value',
    message: 'refs.formMessage.value',
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(objForm));
}

const formSave = JSON.parse(localStorage.getItem(STORAGE_KEY));

if (formSave) {
  refs.formEmail.value = formSave.email;
  refs.formMessage.value = formSave.message;
}

function handleSubmitForm(e) {
  e.preventDefault();
  refs.form.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formSave);
}
