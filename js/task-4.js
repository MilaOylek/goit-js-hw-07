const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault(); // Зупиняємо перезавантаження сторінки

  const {
    elements: { email, password }
  } = event.currentTarget;
  if (email.value.trim() === "" || password.value.trim() === "") {
    return alert('All form fields must be filled in');
  }
  const formData = {
    email: email.value.trim(),
    password: password.value.trim()
  };

  console.log(formData); // Виводимо дані в консоль
  event.currentTarget.reset(); // Очищаємо форму
}
