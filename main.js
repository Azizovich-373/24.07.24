const form = document.forms.namedItem('registration')
form.onsubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const student = {
    emial: formData.get('registration_email'),
    name: formData.get('registration_name'),
    surname: formData.get('registration_surname'),
    password: formData.get('registration_password'),
  }

  console.log(student);
}