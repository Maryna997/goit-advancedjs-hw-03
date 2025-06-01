import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { renderGallery, clearGallery } from "./js/render-functions";

const refs = {
    form: document.querySelector('.form'),
    gallery: document.querySelector('.gallery'),
    input: document.querySelector('input'),
};

const onFormSubmit = e => {
    e.preventDefault();

    const query = refs.input.value;
    refs.input.value = '';

    fetch(`https://pixabay.com/api/?q=${query}&key=50594223-08a3a2e6b4d3e84c5c31a5d02`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }

            return response.json();
        }).then(data => {
            console.log(data);
        } )
        .catch(error => {
            console.log(error);
        });
}

refs.form.addEventListener("submit", onFormSubmit);
