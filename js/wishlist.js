
document.addEventListener("DOMContentLoaded",()=>{const g=document.querySelector("#wishlistGrid");if(!g)return;const w=JSON.parse(localStorage.getItem("cf_wishlist")||"[]");const list=products.filter(p=>w.includes(p.id));g.innerHTML=list.length?list.map(productCard).join(""):'<div class="empty"><h2 class="serif">Nothing saved yet</h2><a class="btn" href="shop.html">EXPLORE SHOP</a></div>';});
