//could of been done in css also
window.addEventListener('resize', burgerMenu = ()=>{
  var links = document.querySelector(".nav-links");
  if (window.innerWidth < 700) {
    links.style.display = "block";
  } else  {
    links.style.display = "inline-flex";
  }
})



