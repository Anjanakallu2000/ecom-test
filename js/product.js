
document.addEventListener("DOMContentLoaded",()=>{
const el=document.querySelector("#productDetail");if(!el)return;
const id=Number(new URLSearchParams(location.search).get("id")||1),p=products.find(x=>x.id===id)||products[0];
document.title=p.name+" | Circular Fashion";
el.innerHTML=`<div class="product-gallery"><div class="thumbs"><img src="${p.image}" onclick="document.querySelector('#mainProduct').src=this.src"><img src="${p.hover}" onclick="document.querySelector('#mainProduct').src=this.src"></div><div><img id="mainProduct" class="main-product-img" src="${p.image}" alt="${p.name}"></div></div>
<div class="product-buy"><div class="eyebrow">${p.collection}</div><h1 class="serif">${p.name}</h1><div class="rating">★★★★★ <span class="muted">${p.rating} · 84 reviews</span></div><div class="price">${money(p.price)}</div><p style="color:var(--muted)">Inclusive of applicable taxes.</p>
<div class="variant-label">Colour</div><div class="swatches">${p.colors.map(c=>`<i class="swatch" style="background:${c};width:24px;height:24px"></i>`).join("")}</div>
<div class="variant-label">Size</div><div class="sizes">${p.sizes.map((s,i)=>`<button class="size ${i===1?"selected":""}" onclick="document.querySelectorAll('.size').forEach(x=>x.classList.remove('selected'));this.classList.add('selected')">${s}</button>`).join("")}</div>
<button class="btn buy-btn" onclick="addToCart(${p.id},document.querySelector('.size.selected')?.textContent)">ADD TO BAG — ${money(p.price)}</button>
<div class="accordion"><button>Product details <b>+</b></button><div class="accordion-content">Designed for long-term wear with a considered silhouette. This piece is part of our circular design system.</div></div>
<div class="accordion"><button>Materials & impact <b>+</b></button><div class="accordion-content">${p.material}. Made with lower-impact material choices and designed for repair, resale and responsible end-of-life.</div></div>
<div class="accordion"><button>Shipping & returns <b>+</b></button><div class="accordion-content">Free standard shipping over ₹5,000. Eligible items can be returned within 14 days in unused condition.</div></div></div>`;
document.querySelectorAll(".accordion button").forEach(b=>b.addEventListener("click",()=>b.parentElement.classList.toggle("open")));
const rec=products.filter(x=>x.id!==p.id).slice(0,4);const rg=document.querySelector("#recommendations");if(rg)rg.innerHTML=rec.map(productCard).join("");
});
