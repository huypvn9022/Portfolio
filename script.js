let header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("scroll-header", this.window.scrollY > 90);
})