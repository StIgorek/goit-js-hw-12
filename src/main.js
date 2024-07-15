import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import axios from "axios";

import { renderPictures } from "./js/render-functions";
import { generateHttpsQuery, fetchPictures } from "./js/pixabay-api";

const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionPosition: "bottom",
    captionsData: "alt"
});

const refs = {
    searchForm: document.querySelector(".js-search-form"),
    gallery: document.querySelector(".js-gallery"),
    loader: document.querySelector(".js-loader"),
};

refs.searchForm.addEventListener("submit", handlerSubmit);

function handlerSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formValue = form.elements.searchtext.value.toLowerCase().trim();
    refs.gallery.innerHTML = "";
    refs.loader.classList.add("loader");
        if (formValue === "") {
            fetchError();
            refs.loader.classList.remove("loader");
            return;
        } 
    fetchPictures(generateHttpsQuery(formValue))
        .then((data) => {
            refs.loader.classList.remove("loader");
            const hits = data.hits;
            if (hits.length === 0) {
                fetchError();
            } 
            refs.gallery.insertAdjacentHTML("beforeend", renderPictures(hits));
            lightbox.refresh();
        })
        .catch(fetchError)
        .finally(() => refs.searchForm.reset());
}

function fetchError(error) {
    iziToast.error({
        title: "Error",
        message: "Sorry, there are no images matching your search query. Please try again!",
    });
}

