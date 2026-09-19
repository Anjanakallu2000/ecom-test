
document.addEventListener("DOMContentLoaded",()=>{
document.querySelectorAll("[data-demo-login]").forEach(b=>b.onclick=()=>{localStorage.setItem("cf_logged","1");toast("Demo account signed in");location.href="account.html"});
});
