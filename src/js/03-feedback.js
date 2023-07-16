import throttle from 'lodash.throttle';

const FEEDBACK_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');

const {
  elements: { email, message },
} = formEl;

const dataObj = {};

formEl.addEventListener('input', throttle(inputHandler, 500));

function inputHandler(evt) {
  dataObj.email = email.value;
  dataObj.message = message.value;

  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(dataObj));
}

let feedbackFormState = JSON.parse(
  localStorage.getItem('feedback-form-state')
) || { email: '', message: '' };

email.value = feedbackFormState.email;
message.value = feedbackFormState.message;

formEl.addEventListener('submit', submitHandler);

function submitHandler(evt) {
  evt.preventDefault();

  if (email.value === '' || message.value === '') {
    return alert('All field have be full');
  }

  console.log(JSON.parse(localStorage.getItem(FEEDBACK_KEY)));

  localStorage.removeItem(FEEDBACK_KEY);

  evt.currentTarget.reset();
}
