import{S as w,a as v,i as d}from"./assets/vendor-53a1b719.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const u=new w(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"}),r={searchForm:document.querySelector(".js-search-form"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".js-loader"),loadMoreBtn:document.querySelector(".js-load-more-button")};function h(){r.loader.classList.remove("is-hidden"),r.loader.classList.add("loader")}function f(){r.loader.classList.add("is-hidden"),r.loader.classList.remove("loader")}function m(){r.loadMoreBtn.classList.remove("is-hidden")}function c(){r.loadMoreBtn.classList.add("is-hidden")}function g(s){return s.map(({webformatURL:a,largeImageURL:n,tags:i,likes:e,views:t,comments:l,downloads:L})=>`
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
    `).join("")}function M(){const s=document.querySelector(".gallery-card").getBoundingClientRect().height;window.scrollBy({top:Math.ceil(s*2),left:Math.ceil(s*2),behavior:"smooth"})}const o={key:"44853639-2309de7343cad235f23b575f4",q:"",imageType:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:15,maxPage:0};async function p(){return(await v.get("https://pixabay.com/api/",{params:o})).data}function y(){d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"center"})}function x(){d.warning({title:"Caution",message:"Please write your request in the input field!",position:"topRight"})}function P(){d.info({message:"We're sorry, but you've reached the end of search results.",position:"center"})}r.searchForm.addEventListener("submit",q);async function q(s){s.preventDefault(),r.gallery.innerHTML="",o.page=1;const a=s.currentTarget;if(o.q=a.elements.searchtext.value.toLowerCase().trim(),!o.q){x();return}h();try{const{totalHits:n,hits:i}=await p();f(),o.maxPage=Math.ceil(n/o.per_page),r.gallery.insertAdjacentHTML("beforeend",g(i)),u.refresh(),i.length>0&&i.length!==n?(m(),r.loadMoreBtn.addEventListener("click",b)):i.length===0&&(y(),c())}catch{}finally{r.searchForm.reset()}}async function b(){o.page+=1,c(),h();try{const{hits:s}=await p();m(),f(),r.gallery.insertAdjacentHTML("beforeend",g(s)),u.refresh(),M()}catch{y()}finally{o.page===o.maxPage&&(c(),P(),r.loadMoreBtn.removeEventListener("click",b))}}
//# sourceMappingURL=commonHelpers.js.map
