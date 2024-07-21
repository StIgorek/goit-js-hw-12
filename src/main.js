import { lightbox, refs, showLoader, hideLoader, showButton, hideButton, renderPictures, scrollGalerryCard  } from "./js/render-functions";
import { searchParams, getPictures } from "./js/pixabay-api";
import { noImagesError, noRequestError, endSearchMessage } from "./js/error-msg-functions";

refs.searchForm.addEventListener("submit", handlerSearch);

async function handlerSearch(event) {
    event.preventDefault();

    refs.gallery.innerHTML = "";
    searchParams.page = 1;
    
    const form = event.currentTarget;
    searchParams.q = form.elements.searchtext.value.toLowerCase().trim();

    if (!searchParams.q) {
        noRequestError();
        //hideButton();
        return;
    }

    showLoader();

    try {
        const { totalHits, hits } = await getPictures();

        hideLoader();
        searchParams.maxPage = Math.ceil(totalHits / searchParams.per_page);
        refs.gallery.insertAdjacentHTML("beforeend", renderPictures(hits));
        lightbox.refresh();

        if (hits.length > 0 && hits.length !== totalHits) {
            showButton();
            refs.loadMoreBtn.addEventListener("click", handlerLoadMore);
        } else if (hits.length === 0) {
            noImagesError();
            hideButton();
        }
    } catch (error) {
        noImagesError;
    } finally {
        refs.searchForm.reset();
    }
}

async function handlerLoadMore() {
    searchParams.page += 1;
    hideButton();
    showLoader();

    try {
        const { hits } = await getPictures(); 

        showButton();
        hideLoader();

        refs.gallery.insertAdjacentHTML("beforeend", renderPictures(hits));
        lightbox.refresh();
        scrollGalerryCard();      
    } catch (error) {
        noImagesError();
    } finally {
        if (searchParams.page === searchParams.maxPage) {
            hideButton();
            endSearchMessage();
            refs.loadMoreBtn.removeEventListener("click", handlerLoadMore);
        }
    }
}

