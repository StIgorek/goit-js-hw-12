import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const lightbox = new SimpleLightbox('.gallery a', {
        captionDelay: 250,
        captionPosition: "bottom",
        captionsData: "alt",
});

const refs = {
    searchForm: document.querySelector(".js-search-form"),
    gallery: document.querySelector(".js-gallery"),
    loader: document.querySelector(".js-loader"),
    loadMoreBtn: document.querySelector(".js-load-more-button"),
};

function showLoader() {
    refs.loader.classList.remove("is-hidden");
    refs.loader.classList.add("loader");
}
function hideLoader() {
    refs.loader.classList.add("is-hidden");
    refs.loader.classList.remove("loader");
}
function showButton() {
    refs.loadMoreBtn.classList.remove("is-hidden");
}
function hideButton() {
    refs.loadMoreBtn.classList.add("is-hidden");
}

function renderPictures(hits) {
    return hits.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => `
    <li class="gallery-card">
        <a class="gallery-link" href="${largeImageURL}">
          <img
            class="gallery-image"
            src="${webformatURL}" 
            alt="${tags}" 
            width="360"
            height="152" 
          />
        </a>
        <div class="discribe-box">
          <ul class="discribe-list">
            <li class="discribe-item">
              <h2 class="discribe-title">Likes</h2>
              <p class="discribe-text">${likes}</p>
            </li>
            <li class="discribe-item">
              <h2 class="discribe-title">Views</h2>
              <p class="discribe-text">${views}</p>
            </li>
            <li class="discribe-item">
              <h2 class="discribe-title">Comments</h2>
              <p class="discribe-text">${comments}</p>
            </li>
            <li class="discribe-item">
              <h2 class="discribe-title">Downloads</h2>
              <p class="discribe-text">${downloads}</p>
            </li>
          </ul>
        </div>
      </li>
    `).join("");
}

function scrollGalerryCard() {
    const galleryCardHeight = document
        .querySelector(".gallery-card")
        .getBoundingClientRect().height;
    
    window.scrollBy({
        top: Math.ceil(galleryCardHeight *2),
        left: Math.ceil(galleryCardHeight *2),
        behavior: "smooth",
    });
}

// -------- EXPORT --------------//
export { lightbox, refs, showLoader, hideLoader, showButton, hideButton, renderPictures, scrollGalerryCard }