// Shadow effects
window.addEventListener("scroll", e => {
  const knethHeader = document.querySelector(".kneth_header");
  const scrolled = window.scrollY;

  if(scrolled !== 0) {
    knethHeader.classList.add("shadow")
  } else {
    knethHeader.classList.remove("shadow")
  }
});

// Scroll to sections, I used JQuery here. I reference this to Kevin Powell in Youtube. Tweak a litte.
$(document).ready(function() {
  const scrollLink = $(".scroll");

  scrollLink.click(function(e) {
    e.preventDefault();

    $("body, html").animate({
      scrollTop: $(this.hash).offset().top - 250
    }, 1000);
  });

  $(window).scroll(function() {
    const scrollBarLocation = $(this).scrollTop();

    scrollLink.each(function() {
      const sectionOffset = $(this.hash).offset().top;

      if(sectionOffset - 250 <= scrollBarLocation) {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
      }

      if(scrollY === 0) {
        $(this).removeClass("active");
      }
    });
  });
});