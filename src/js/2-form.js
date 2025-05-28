const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');


let formData = { email: '', message: '' };

populateForm();

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
  const { name, value } = event.target;
  formData[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    formData = JSON.parse(saved);
    form.email.value = formData.email;
    form.message.value = formData.message;
  }
}

function onFormSubmit(event) {
  event.preventDefault();
  const { email, message } = formData;

  if (!email || !message) {
    alert('Fill please all fields');
    return;
  }

  console.log({ email, message });
  form.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
}