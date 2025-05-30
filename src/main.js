import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const refs = {
    form: document.querySelector('.form'),
    gallery: document.querySelector('.gallery'),
};

const onFormSubmit = e => {
    e.preventDefault();
}

refs.form.addEventListener("submit", onFormSubmit);

// fetch("https://pixabay.com/api/?q=dog&key=50594223-08a3a2e6b4d3e84c5c31a5d02");