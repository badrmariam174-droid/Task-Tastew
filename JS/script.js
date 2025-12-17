





let toggleBtn = document.getElementById('modeToggle');

toggleBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark');
    toggleBtn.innerHTML = document.body.classList.contains('dark') ?
        `  <i class="fa-solid fa-sun text-warning fs-3 mx-3 "></i>` :
        ` <i class="fa-solid fa-moon text-warning fs-3 mx-3 "></i> `
});


let form = document.getElementById('contactForm');
let alertBox = document.getElementById('formAlert');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;

  if (name === '' || email === '' || message === '') {
    alertBox.innerHTML = ` <div class="alert alert-danger alert-dismissible fade show" role="alert">
  Please fill all fields
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`
    return;
  }
  if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
    alertBox.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
  Please Enter valid Email
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`
    return;

  }
  alertBox.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
Form submitted Successfuly!
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`
  form.reset()
})
