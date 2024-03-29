document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
      var scrollPosition = window.scrollY;
      var image = document.getElementById("scrollImage");
      var imageWidth = image.offsetWidth;
      var containerWidth = document.querySelector(".container").offsetWidth;
      var leftPosition = (scrollPosition / (document.body.offsetHeight - window.innerHeight)) * (containerWidth - imageWidth);
      
      image.style.left = leftPosition + "px";
    });
  });
  