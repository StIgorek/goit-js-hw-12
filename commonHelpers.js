import{S as w,a as u,i as d}from"./assets/vendor-53a1b719.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const h=new w(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"}),r={searchForm:document.querySelector(".js-search-form"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".js-loader"),loadMoreBtn:document.querySelector(".js-load-more-button")};function f(){r.loader.classList.remove("is-hidden"),r.loader.classList.add("loader")}function m(){r.loader.classList.add("is-hidden"),r.loader.classList.remove("loader")}function g(){r.loadMoreBtn.classList.remove("is-hidden")}function c(){r.loadMoreBtn.classList.add("is-hidden")}function p(s){return s.map(({webformatURL:a,largeImageURL:n,tags:i,likes:e,views:t,comments:l,downloads:L})=>`
    <li class="gallery-card">
        <a class="gallery-link" href="${n}">
          <img
            class="gallery-image"
            src="${a}" 
            alt="${i}" 
            width="360"
            height="152" 
          />
        </a>
        <div class="discribe-box">
          <ul class="discribe-list">
            <li class="discribe-item">
              <h2 class="discribe-title">Likes</h2>
              <p class="discribe-text">${e}</p>
            </li>
            <li class="discribe-item">
              <h2 class="discribe-title">Views</h2>
              <p class="discribe-text">${t}</p>
            </li>
            <li class="discribe-item">
              <h2 class="discribe-title">Comments</h2>
              <p class="discribe-text">${l}</p>
            </li>
            <li class="discribe-item">
              <h2 class="discribe-title">Downloads</h2>
              <p class="discribe-text">${L}</p>
            </li>
          </ul>
        </div>
      </li>
    `).join("")}function v(){const s=document.querySelector(".gallery-card").getBoundingClientRect().height;window.scrollBy({top:Math.ceil(s*2),left:Math.ceil(s*2),behavior:"smooth"})}const M="https://pixabay.com",P="api";u.defaults.baseURL=M;const o={key:"44853639-2309de7343cad235f23b575f4",q:"",imageType:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:15,maxPage:0};async function y(){return(await u.get(P,{params:o})).data}function x(){d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"center"})}function q(){d.warning({title:"Caution",message:"Please write your request in the input field!",position:"topRight"})}function S(){d.info({message:"We're sorry, but you've reached the end of search results.",position:"center"})}r.searchForm.addEventListener("submit",B);async function B(s){s.preventDefault(),r.gallery.innerHTML="";const a=s.currentTarget;if(o.q=a.elements.searchtext.value.toLowerCase().trim(),!o.q){q(),c();return}f();try{const{totalHits:n,hits:i}=await y();m(),o.maxPage=Math.ceil(n/o.per_page),r.gallery.insertAdjacentHTML("beforeend",p(i)),h.refresh(),i.length>0&&i.length!==n?(g(),r.loadMoreBtn.addEventListener("click",b)):i.length===0&&(x(),c())}catch{}finally{r.searchForm.reset()}}async function b(){o.page+=1,c(),f();try{const{hits:s}=await y();g(),m(),r.gallery.insertAdjacentHTML("beforeend",p(s)),h.refresh(),v()}catch{}finally{o.page===o.maxPage&&(c(),S(),r.loadMoreBtn.removeEventListener("click",b))}}
//# sourceMappingURL=commonHelpers.js.map
