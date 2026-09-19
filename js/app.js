
const money = n => new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(n);
const getCart=()=>JSON.parse(localStorage.getItem("cf_cart")||"[]");
const saveCart=c=>{localStorage.setItem("cf_cart",JSON.stringify(c));updateCartCount();};
function updateCartCount(){document.querySelectorAll(".cart-count").forEach(e=>e.textContent=getCart().reduce((s,i)=>s+i.qty,0));}
function toast(msg){const t=document.querySelector(".toast");if(!t)return;t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2200)}
function addToCart(id,size=null){const p=products.find(x=>x.id==id);if(!p)return;const cart=getCart();const key=`${id}-${size||p.sizes[0]}`;const item=cart.find(x=>x.key===key);if(item)item.qty++;else cart.push({key,id,qty:1,size:size||p.sizes[0]});saveCart(cart);toast("Added to your bag");}
function toggleWishlist(id){const w=JSON.parse(localStorage.getItem("cf_wishlist")||"[]");const n=Number(id);const i=w.indexOf(n);if(i>=0){w.splice(i,1);toast("Removed from wishlist")}else{w.push(n);toast("Saved to wishlist")}localStorage.setItem("cf_wishlist",JSON.stringify(w));renderWishlistButtons()}
function renderWishlistButtons(){const w=JSON.parse(localStorage.getItem("cf_wishlist")||"[]");document.querySelectorAll("[data-wishlist]").forEach(b=>b.textContent=w.includes(Number(b.dataset.wishlist))?"♥":"♡")}
function productCard(p){return `<article class="product-card">
<div class="product-image"><a href="product.html?id=${p.id}"><img class="main" src="${p.image}" alt="${p.name}"><img class="hover" src="${p.hover}" alt="${p.name} alternate view"></a>${p.badge?`<span class="product-badge">${p.badge}</span>`:""}<button class="wishlist" data-wishlist="${p.id}" onclick="toggleWishlist(${p.id})">♡</button><button class="btn quick-add" onclick="addToCart(${p.id})">QUICK ADD</button></div>
<div class="product-info"><div class="product-meta"><span>${p.collection}</span><span>★ ${p.rating}</span></div><h3><a href="product.html?id=${p.id}">${p.name}</a></h3><div class="product-meta"><span>${money(p.price)}</span><span>${p.material}</span></div><div class="swatches">${p.colors.map(c=>`<i class="swatch" style="background:${c}"></i>`).join("")}</div></div></article>`}
document.addEventListener("DOMContentLoaded",()=>{updateCartCount();renderWishlistButtons();document.querySelectorAll("[data-year]").forEach(e=>e.textContent=new Date().getFullYear());
document.querySelectorAll(".accordion button").forEach(b=>b.addEventListener("click",()=>b.parentElement.classList.toggle("open")));
const searchBtn=document.querySelector("[data-search]");if(searchBtn)searchBtn.onclick=()=>document.querySelector("#searchModal").classList.add("show");
document.querySelectorAll("[data-close]").forEach(x=>x.onclick=()=>x.closest(".modal").classList.remove("show"));
});
