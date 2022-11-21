import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  formEmail: document.querySelector('.feedback-form input'),
  formMessage: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('input', throttle(handleInputForm, 500));
refs.form.addEventListener('submit', handleSubmitForm);

let objForm = {
  email: '',
  message: '',
};

function handleInputForm(e) {
  objForm.email = refs.formEmail.value;
  objForm.message = refs.formMessage.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(objForm));
}

const formSave = JSON.parse(localStorage.getItem('feedback-form-state'));

if (formSave) {
  refs.formEmail.value = formSave.email;
  refs.formMessage.value = formSave.message;
}

function handleSubmitForm(e) {
  e.preventDefault();
  refs.form.reset();
  localStorage.removeItem('feedback-form-state');
  console.log(formSave);
}
