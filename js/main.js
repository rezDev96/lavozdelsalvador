document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages = document.querySelectorAll("img.lazy");    
  var lazyloadThrottleTimeout;

  function lazyload (){
    if(lazyloadThrottleTimeout){
      clearTimeout(lazyloadThrottleTimeout);
    }
    lazyloadThrottleTimeout = setTimeout(function(){
      var scrollTop = window.pageYOffset;
      lazyloadImages.forEach(function(img) {
        if(img.offsetTop < (window.innerHeight + scrollTop)){
          img.src = img.dataset.src;
          img.classList.remove('lazy');
        }
      });
      if(lazyloadImages.length == 0){
        document.removeEventListener("scroll", lazyload);
        window.removeEventListener("resize", lazyload);
        window.removeEventListener("orientationChange", lazyload);
      }
    }, 20);
  }
  
  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});

// Sidenav
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});
// Slider
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
  indicators: false,
  height: 660,
  transition: 500,
  interval: 6000
});
// Material Boxed
const mb = document.querySelectorAll('.materialboxed');
M.Materialbox.init(mb,{});
// ScrollSpy
const ss = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(ss, {
  scrollOffset: 50
});