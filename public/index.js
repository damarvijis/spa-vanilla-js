(()=>{"use strict";var e={d:(t,o)=>{for(var a in o)e.o(o,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:o[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{s:()=>p});const t=({id:e})=>fetch("https://dummyjson.com/products/"+e);let o=null,a={path:window.location.pathname,home:{inputValue:localStorage.getItem("inputValue")??"",products:[],isLoading:!1,loadingHomePage:!1,errorMessage:"",page:1,totalPage:1,totalData:0},favorite:{favoriteIds:JSON.parse(localStorage.getItem("favoriteIds"))??[],isLoading:!1,products:[],errorMessage:""},detail:{productId:JSON.parse(localStorage.getItem("productId"))??null,product:null,isLoading:!1,errorMessage:""}};const n=e=>{const t={...a},o={...t,...e};a=o,p(),i(t,o)},i=(e,i)=>{if(e.path!=i.path){if("/favorite"==i.path?n({favorite:{...a.favorite,products:[],isLoading:!0}}):n({favorite:{...a.favorite,products:[]}}),"/home"==i.path?n({home:{...a.home,products:[],inputValue:"",page:1,isLoading:!0}}):n({home:{...a.home,products:[],inputValue:""}}),"/detail"==i.path){const e=new URL(window.location.href).searchParams.get("id");e&&Number(e)?n({detail:{...a.detail,product:null,productId:e}}):n({detail:{...a.detail,product:null,productId:null}})}else n({detail:{...a.detail,product:null,productId:null}});history.pushState(null,"",i.path)}if(e.home.inputValue!=i.home.inputValue&&(localStorage.setItem("inputValue",i.home.inputValue),n({home:{...a.home,loadingHomePage:!0}}),null!=o&&clearTimeout(o),o=setTimeout((()=>{n({home:{...a.home,loadingHomePage:!1,isLoading:!0,page:1}})}),500)),e.home.page!=i.home.page&&n({home:{...a.home,isLoading:!0}}),e.home.totalData!=i.home.totalData){const e=Math.floor(a.home.totalData/10);n({home:{...a.home,totalPage:e}})}if(!1===e.home.isLoading&&!0===i.home.isLoading){(({limit:e,skip:t,search:o})=>fetch(`https://dummyjson.com/products/search?q=${o}&skip=${t}&limit=${e}`))({limit:10,skip:10*(i.home.page-1),search:a.home.inputValue}).then((e=>e.json())).then((e=>{n({home:{...a.home,isLoading:!1,products:e.products,errorMessage:"",totalData:e.total}})})).catch((e=>n({home:{...a.home,isLoading:!1,products:[],errorMessage:e.message,totalData:0}})))}if(e.favorite.favoriteIds!=i.favorite.favoriteIds&&localStorage.setItem("favoriteIds",JSON.stringify(i.favorite.favoriteIds)),!1===e.favorite.isLoading&&!0===i.favorite.isLoading){const e=a.favorite.favoriteIds.map((e=>t({id:e}).then((e=>e.json())).catch((e=>{n({favorite:{...a.favorite,isLoading:!1,products:[],errorMessage:e.message}})}))));Promise.all(e).then((e=>{n({favorite:{...a.favorite,products:e,isLoading:!1,errorMessage:""}})}))}if(!1===e.detail.isLoading&&!0===i.detail.isLoading&&a.detail.productId&&t({id:a.detail.productId}).then((e=>e.json())).then((e=>{n({detail:{...a.detail,isLoading:!1,product:e,errorMessage:""}})})).catch((e=>n({detail:{...a.detail,isLoading:!1,product:null,errorMessage:e.message}}))),e.detail.productId!=i.detail.productId){const e=new URL(window.location.href);if(null==i.detail.productId)e.search="",window.history.pushState(null,"",e);else{const t=new URLSearchParams;t.set("id",i.detail.productId),e.search=t.toString(),window.history.pushState(null,"",e),n({detail:{...a.detail,isLoading:!0}})}localStorage.setItem("productId",JSON.stringify(i.detail.productId))}},d=e=>{const t=document.createElement("a");return t.href=e.href,t.textContent=e.label,t.onclick=t=>{t.preventDefault();const o=new URL(t.target.href);n({path:o.pathname}),e.onClick&&e.onClick()},t},r=e=>{const t=(()=>{const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="row",e.style.gap="5px",e.style.justifyContent="center",e.style.alignItems="center";const t=[];for(let e=1;e<=a.home.totalPage;e++){const o=document.createElement("button");e==a.home.page&&(o.style.backgroundColor="red"),o.textContent=e,o.onclick=()=>{n({home:{...a.home,page:e,isLoading:!0}})},t.push(o)}return e.append(...t),e})(),o=a[e].products.map((e=>(e=>{const t=document.createElement("div");t.style.display="flex",t.style.flexDirection="column",t.style.justifyContent="center",t.style.alignItems="center";const o=document.createElement("img");o.src=e.thumbnail,o.style.width="80px",o.style.height="100px";const i=document.createElement("h5");i.textContent=e.title;const r=document.createElement("p");r.textContent=e.description;const c=a.favorite.favoriteIds.some((t=>t==e.id)),l=document.createElement("button");l.textContent=c?"Delete from favorite":"Add to favorite",l.onclick=()=>{if(c){const t=a.favorite.favoriteIds.filter((t=>t!=e.id));n({favorite:{...a.favorite,favoriteIds:t}}),"/favorite"==a.path&&n({favorite:{...a.favorite,isLoading:!0}})}else n({favorite:{...a.favorite,favoriteIds:[...a.favorite.favoriteIds,e.id]}})};const s=d({href:"/detail",label:"See Detail "+e.title,onClick:()=>{n({detail:{...a.detail,productId:e.id}})}});return t.append(o),t.append(i),t.append(l),t.append(s),t.append(r),t})(e))),i=document.createElement("p");i.textContent="Loading Products...";const r=document.createElement("p");r.textContent="Product Empty";const c=document.createElement("p");c.textContent=a[e].errorMessage;const l=document.createElement("div");return a[e].isLoading||a.home.loadingHomePage?l.append(i):""!=a[e].errorMessage?l.append(c):0==a[e].products.length?l.append(r):(l.append(...o),"/home"!=a.path&&"/"!=a.path||l.append(t)),l},c=()=>{const e=document.createElement("div"),t=document.createElement("h5");t.textContent="List Product";const o=r("home"),i=(()=>{const e=document.createElement("div"),t=document.createElement("input");return t.id="input",t.value=a.home.inputValue,t.placeholder="enter product name",t.oninput=e=>{n({home:{...a.home,inputValue:e.target.value}})},e.append(t),e})();return e.append(i),e.append(t),e.append(o),e},l=()=>{const e=document.createElement("div"),t=document.createElement("p");t.textContent="gaada product nya cuy";const o=d({href:"/home",label:"Back to Home"});if(e.append(o),e.append(t),a.detail.product){t.textContent="ini detail product "+a.detail.product.title;const o=(e=>{const t=document.createElement("div");t.style.display="flex",t.style.flexDirection="column",t.style.justifyContent="center",t.style.alignItems="center";const o=document.createElement("img");o.src=e.thumbnail,o.style.width="80px",o.style.height="100px";const a=document.createElement("h5");a.textContent=e.title;const n=document.createElement("p");n.textContent="Category: "+e.category;const i=document.createElement("p");i.textContent="Brand: "+e.brand;const d=document.createElement("p");d.textContent="Price: $"+e.price;const r=document.createElement("p");return r.textContent=e.description,t.append(o),t.append(a),t.append(n),t.append(i),t.append(d),t.append(r),t})(a.detail.product);e.append(o)}return e},s=()=>{const e=document.createElement("div"),t=(()=>{const e=d({href:"/home",label:"Home"}),t=d({href:"/favorite",label:"Favorite"}),o=document.createElement("div");return o.style.display="flex",o.style.gap="10px",o.append(e),o.append(t),o})(),o=c(),n=(()=>{const e=document.createElement("div"),t=document.createElement("h5");t.textContent="Favorite Product";const o=r("favorite");return e.append(t),e.append(o),e})(),i=l();return a.path.includes("/detail")||e.append(t),"/home"==a.path?e.append(o):"/favorite"==a.path?e.append(n):a.path.includes("/detail")?e.append(i):e.append(o),e},p=()=>{const e=document.getElementById("content"),t=document.activeElement.id,o=document.activeElement.selectionStart,a=document.activeElement.selectionEnd,n=s();if(e.innerHTML="",e.append(n),t){const e=document.getElementById(t);e.focus(),e.selectionStart=o,e.selectionEnd=a}};p(),i({path:void 0,home:{inputValue:void 0,products:void 0,isLoading:void 0,errorMessage:void 0,page:void 0,totalPage:void 0,totalData:void 0},favorite:{favoriteIds:void 0,isLoading:void 0,products:void 0,errorMessage:void 0},detail:{productId:void 0,product:void 0,isLoading:void 0,errorMessage:void 0}},a)})();