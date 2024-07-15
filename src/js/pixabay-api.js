const params = {
  key: "44853639-2309de7343cad235f23b575f4",
  q: "",
  imageType: "photo",
  orientation: "horizontal",
  safesearch: true,
};

function generateHttpsQuery(formValue) {
  params.q = formValue;
  const queryString = new URLSearchParams(params).toString();
  return `https://pixabay.com/api/?${queryString}`;
}

function fetchPictures(httpsQuery) {
  return fetch(httpsQuery)
      .then((response) => {
          if (!response.ok) {
              throw new Error(response.status);
          }
          return response.json();
      })
}


// -------- EXPORT --------------//
export { generateHttpsQuery, fetchPictures }
