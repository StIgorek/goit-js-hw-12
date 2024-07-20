import axios from "axios";

const BASE_URL = "https://pixabay.com";
const ENDPOINT = "api";
axios.defaults.baseURL = BASE_URL;

const searchParams = {
    key: "44853639-2309de7343cad235f23b575f4",
    q: "",
    imageType: "photo",
    orientation: "horizontal",
    safesearch: true,
    page: 1,
    per_page: 15,
    maxPage: 0,
};

async function getPictures() {
    const response = await axios.get(ENDPOINT, {params: searchParams});
        return response.data;
}

// -------- EXPORT --------------//
export { getPictures, searchParams }
