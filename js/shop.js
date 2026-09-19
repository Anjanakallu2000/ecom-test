
function renderShop(list=products){const grid=document.querySelector("#productGrid");if(grid)grid.innerHTML=list.map(productCard).join("");renderWishlistButtons()}
document.addEventListener("DOMContentLoaded",()=>{
if(!document.querySelector("#productGrid"))return;
let list=[...products]; const page=Number(document.body.dataset.page||1); const per=8;
const params=new URLSearchParams(location.search); const cat=params.get("category"); if(cat)list=list.filter(p=>p.category.toLowerCase()===cat.toLowerCase());
const search=params.get("q"); if(search)list=list.filter(p=>(p.name+p.type+p.material).toLowerCase().includes(search.toLowerCase()));
const sort=document.querySelector("#sort"); if(sort)sort.onchange=()=>{let x=[...list];if(sort.value==="low")x.sort((a,b)=>a.price-b.price);if(sort.value==="high")x.sort((a,b)=>b.price-a.price);if(sort.value==="rating")x.sort((a,b)=>b.rating-a.rating);renderShop(x.slice((page-1)*per,page*per));};
renderShop(list.slice((page-1)*per,page*per));
document.querySelectorAll("[data-filter]").forEach(f=>f.onchange=()=>{const val=f.value.toLowerCase();let x=products.filter(p=>!val||p.category.toLowerCase()===val||p.material.toLowerCase()===val);renderShop(x.slice((page-1)*per,page*per))});
});
