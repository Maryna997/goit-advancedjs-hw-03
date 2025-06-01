import{a as p,S as m,i as l}from"./assets/vendor-Dl6Guels.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function f(a){return p.get("https://pixabay.com/api/",{headers:{"Content-Type":"application/json"},params:{key:"50594223-08a3a2e6b4d3e84c5c31a5d02",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data).catch(r=>console.error(r))}function h(a){return a.map(({webformatURL:r,largeImageURL:i,tags:o,likes:e,views:t,comments:n,downloads:d})=>`<li class="gallery-item">
            <a class="gallery-link" href="${i}">
                <img
                    class="gallery-image"
                    src="${r}"
                    data-source="${i}"
                    alt="${o}"
                    width=360
                    height=200
                />

            </a>
            <ul class='metadata'>
                <li>
                    <p class='metadata-heading'>Likes</p>
                    <p>${e}</p>
                </li>
                <li>
                    <p class='metadata-heading'>Views</p>
                    <p>${t}</p>
                </li>
                <li>
                    <p class='metadata-heading'>Comments</p>
                    <p>${n}</p>
                </li>
                <li>
                    <p metadata-heading>Downloads</p>
                    <p>${d}</p>
                </li>
            </ul>
        </li>`).join("")}const g=document.querySelector(".form"),s=document.querySelector(".gallery"),c=document.querySelector("input"),u=document.querySelector(".loader"),y=new m(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),L=a=>{a.preventDefault();const r=a.currentTarget,i=c.value.trim();if(c.value="",i===""){l.warning({title:"Caution",message:"Please enter a query!",position:"topRight"});return}u.classList.remove("hidden"),s.innerHTML="",f(i).then(o=>{if(u.classList.add("hidden"),o.total===0)return s.innerHTML="",l.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"});s.innerHTML=h(o.hits),y.refresh()}).catch(o=>{console.log(o)}).finally(()=>{r.reset()})};g.addEventListener("submit",L);
//# sourceMappingURL=index.js.map
