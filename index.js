// service_gmsym2s
// template_4dfmrqv
// sW2wR2idfa9pZ5Wd8

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      "service_gmsym2s",
      "template_4dfmrqv",
      event.target,
      "sW2wR2idfa9pZ5Wd8"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on f.faria1989@gmail.com"
      );
    });
}

let isModalOpen = false;
function toggleModal () {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}
