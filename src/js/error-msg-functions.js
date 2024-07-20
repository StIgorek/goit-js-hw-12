import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

function noImagesError() {
  iziToast.error({
      title: "Error",
      message: "Sorry, there are no images matching your search query. Please try again!",
      position: "center",
  });
}

function noRequestError() {
  iziToast.warning({
      title: "Caution",
      message: "Please write your request in the input field!",
      position: "topRight",
  });
}

function endSearchMessage() {
  iziToast.info({
      message: "We're sorry, but you've reached the end of search results.",
      position: "center",
  });
}

// -------- EXPORT --------------//
export { noImagesError, noRequestError, endSearchMessage }